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
  pushEvents(state, event) {
    state.events.push(event.data());
  },
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
  sendStore(context, payload) {
    const evetnColle = db.collection('events')
    evetnColle.add(payload)
  },
  async getEvents({
    commit
  }) {
    const querySnapshot = await db.collection('events').get()
    querySnapshot.forEach((event) => {
      commit("pushEvents", event)
    })
  }
}

export const getters = {}
