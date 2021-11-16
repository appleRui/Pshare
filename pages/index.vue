<template>
  <v-app id="inspire">
    <v-navigation-drawer app>
      <user-card />
      <v-divider></v-divider>
      <side-item-list
        :dialog="this.dialog"
        @dailogStateChange="dailogStateChange"
      />
    </v-navigation-drawer>

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
                    <th class="text-left">撮影日</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="event in getEvent" :key="event">
                    <td>{{ event.eventName }}</td>
                    <td>{{ event.shooting_date }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-container>
      <add-event-form
        :dialog="this.dialog"
        @dailogStateChange="dailogStateChange"
        :newEvent.sync="this.newEvent"
        @sendStore="sendStore"
      />
    </v-main>
  </v-app>
</template>

<script>
import AddEventForm from "~/components/AddEventForm.vue";
export default {
  components: { AddEventForm },
  data: () => ({
    cards: ["Today"],
    dialog: false,
    newEvent: {
      eventName: "",
      shooting_date: "",
      note: "",
    },
  }),
  middleware: "auth",
  methods: {
    dailogStateChange() {
      this.dialog = !this.dialog;
    },
    sendStore() {
      this.$store.dispatch("sendStore", this.newEvent);
      this.dailogStateChange();
    },
  },
  created() {
    this.$store.dispatch("getEvents");
  },
  computed: {
    getEvent() {
      return this.$store.state.events;
    },
  },
};
</script>