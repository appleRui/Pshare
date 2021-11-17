<template>
  <v-app>
    <side-bar :dialog="dialog" @dailogStateChange="dailogStateChange" />
    <add-event-form
      :dialog="this.dialog"
      @dailogStateChange="dailogStateChange"
      :newEvent.sync="this.newEvent"
      @sendStore="sendStore"
    />
    <nuxt />
  </v-app>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    newEvent: {
      eventName: "",
      shooting_date: "",
      note: "",
    },
  }),
  middleware: 'auth',
  methods: {
    dailogStateChange() {
      this.dialog = !this.dialog;
    },
    sendStore() {
      this.$store.dispatch("sendStore", this.newEvent);
      this.dailogStateChange();
    },
  },
};
</script>