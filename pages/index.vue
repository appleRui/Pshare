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
          <v-col v-for="card in cards" :key="card" cols="12">
            <v-card>
              <v-subheader>{{ card }}</v-subheader>

              <v-list two-line>
                <template v-for="n in 6">
                  <v-list-item :key="n">
                    <v-list-item-avatar color="grey darken-1">
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>Message {{ n }}</v-list-item-title>

                      <v-list-item-subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil repellendus distinctio similique
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                    v-if="n !== 6"
                    :key="`divider-${n}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
            </v-card>
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
      eventName: "eventName",
      firstName: "firstName",
      lastName: "lastName",
      email: "email",
      phoneNumber: "phoneNumber",
      date: "2021-11-15",
      note: "note",
    },
  }),
  middleware: "auth",
  methods: {
    dailogStateChange() {
      this.dialog = !this.dialog;
    },
    sendStore() {
      console.log("Func:sendStore");
      this.$store.dispatch("sendStore", this.newEvent);
    },
  },
  created() {
      this.$store.dispatch("getEvents");
  }
};
</script>