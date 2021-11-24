import firebase from '~/plugins/firebase'
const db = firebase.firestore()

export const state = () => ({
  user: {
    uid: '',
    email: '',
    displayName: '',
    avatarIcon: ''
  },
})

export const mutations = {
  setActiveUser(state, user) {
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
}

export const getters = {}
