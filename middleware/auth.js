import firebase from '../plugins/firebase'

export default function ({
  store, redirect
}) {
  firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
      redirect('/login')
    }
    console.log(user);
    store.commit('setActiveUser', user)
  })
}
