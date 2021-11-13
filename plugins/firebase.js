import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyAX4OG9hHcg_GfBqUJmfE9PJAYgYaFb7fA",
    authDomain: "pshare-7491b.firebaseapp.com",
    projectId: "pshare-7491b",
    storageBucket: "pshare-7491b.appspot.com",
    messagingSenderId: "120952614045",
    appId: "1:120952614045:web:3194b0d42f67d0d4073874",
    measurementId: "G-48B4B0H2VP"
  })
}

export default firebase
