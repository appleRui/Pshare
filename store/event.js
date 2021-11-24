import firebase from '~/plugins/firebase'
const db = firebase.firestore()

export const state = () => ({
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
