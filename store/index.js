import firebase from '~/plugins/firebase'
const db = firebase.firestore()

export const state = () => ({
  user: {
    uid: '',
    email: '',
    displayName: '',
    avatarIcon: ''
  },
  evetns: []
})

export const mutations = {
  setActiveUser(state, user) {
    console.log("Func:setActiveUser")
    state.user.uid = user.uid
    state.user.email = user.email
    state.user.displayName = user.displayName
    state.user.avatarIcon = user.photoURL
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
        console.log("Func:logout")
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
      .then((res) => {
        console.log("ColID:" + res.id);
      })
  },
}


export const getters = {}
