import firebase from '~/plugins/firebase'
const db = firebase.firestore()

export const state = () => ({
  user: {
    uid: '',
    email: '',
    displayName: '',
    avatarIcon: ''
  },
  events: []
})

export const mutations = {
  setActiveUser(state, user) {
    state.user.uid = user.uid
    state.user.email = user.email
    state.user.displayName = user.displayName
    state.user.avatarIcon = user.photoURL
  },
  pushEvent(state, data) {
    state.events.push(data);
  },
  ResetEventsArray(state) {
    state.events = []
  }
}

export const actions = {
  emailAndPasswordLogin({
    commit
  }, payload) {
    firebase
      .auth()
      .signInWithEmailAndPassword(payload.email.toLowerCase(), payload.password.toLowerCase())
      .then((result) => {
        console.log("Func:emailAndPasswordLogin")
        commit('setActiveUser', result.user)
        alert("Success Login!");
        this.$router.push('/')
      })
      .catch((e) => {
        alert("Error:" + e.code + "：" + e.message)
      })
  },
  googleLogin({
    commit
  }) {
    var provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log("Func:googleLogin")
        commit('setActiveUser', result.user)
        alert("Success Login!");
        this.$router.push('/')
      }).catch((e) => {
        alert("Error:" + e.code + "：" + e.message)
      })
  },
  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert('Success Logout!')
        this.$router.push('login')
      })
      .catch((e) => {
        alert("Error:" + e.code + "：" + e.message)
      })
  },
  sendStore({
    commit
  }, payload) {
    const evetnColle = db.collection('events')
    evetnColle.add(payload)
      .then((event) => {
        commit("pushEvent", {
          uid: event.id,
          data: payload
        })
      })
  },
  async getEvents({
    commit
  }) {
    const querySnapshot = await db.collection('events').get()
    commit("ResetEventsArray")
    querySnapshot.forEach((event) => {
      commit("pushEvent", {
        uid: event.id,
        data: event.data()
      })
    })
  },
  deleteEvent(context, payload){
    db.collection('events').doc(payload).delete()
  },
  createAccessCode(context, payload){
    const dt = new Date();
    dt.setMonth(dt.getMonth()+3)
    const data = db.collection('accessCodes').doc().set({WatchingPeriod: dt, event: payload.event});
  },
}

export const getters = {}
