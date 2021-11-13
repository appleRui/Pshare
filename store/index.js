import firebase from '~/plugins/firebase'

export const state = () => ({
  user: {
    uid: '',
    email: '',
    displayName: ''
  }
})

export const mutations = {
  setActiveUser(state, user) {
    console.log("Func:setActiveUser")
    state.user.uid = user.uid
    state.user.email = user.email
    state.user.displayName = user.displayName
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
  }
}


export const getters = {}
