<template>
  <v-main>
    <v-container class="py-8 px-6" fluid>
      <v-row>
        <h1 class="mt-5">イベント一覧</h1>
        <v-col cols="12">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">イベント名</th>
                  <th class="text-left">イベントID</th>
                  <th class="text-left">撮影日</th>
                  <th class="text-left">操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="event in getEvent" :key="event.uid">
                  <td>{{ event.data.eventName }}</td>
                  <td>{{ event.uid }}</td>
                  <td>{{ event.data.shooting_date }}</td>
                  <td>
                    <v-btn
                      :to="`event/${event.uid}`"
                      class="ma-2"
                      outlined
                      color="gray"
                      nuxt
                    >
                      <v-icon>mdi-numeric</v-icon>
                    </v-btn>
                    <v-btn :to="`event/${event.uid}/upload`" class="ma-2" outlined color="gray">
                      <v-icon>mdi-cloud-upload</v-icon>
                    </v-btn>
                    <v-btn
                      class="ma-2"
                      outlined
                      color="gray"
                      @click="deleteEvent(event.uid)"
                    >
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import AddEventForm from "~/components/AddEventForm.vue";

export default {
  components: { AddEventForm },
  data: () => ({
    newEvent: {
      eventName: "",
      shooting_date: "",
      note: "",
    },
    events: []
  }),
  methods: {
    dailogStateChange() {
      this.dialog = !this.dialog;
    },
    sendStore() {
      this.$store.dispatch("event/sendStore", this.newEvent);
      this.dailogStateChange();
      this.newEvent = {
        eventName: "",
        shooting_date: "",
        note: "",
      };
    },
    deleteEvent(uid) {
      let res = confirm("本当に削除しますか？");
      if (res) {
        this.$store.dispatch("event/deleteEvent", uid);
        this.$store.dispatch("event/getEvents");
      }
    },
  },
  created() {
    this.$store.dispatch("event/getEvents");
  },
  computed: {
    getEvent() {
      return this.$store.state.event.events;
    },
  },
};
</script>