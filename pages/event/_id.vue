<template>
  <v-main>
    <v-container class="py-8 px-6" fluid>
      <h1>{{ this.event.eventName }}</h1>
    </v-container>
  </v-main>
</template>

<script>
import firebase from "~/plugins/firebase";
const db = firebase.firestore();

export default {
  data: () => ({
    event: [],
  }),
  created() {
    const current_event = db.collection('events').doc(this.$route.params.id)
    current_event.get().then((res) => {
      this.event = res.data();
    })
  },
};
</script>

<style>
</style>