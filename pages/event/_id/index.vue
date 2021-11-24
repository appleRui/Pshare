<template>
  <v-main>
    <v-container class="py-8 px-6" fluid>
      <h1>{{ this.event.data.eventName }}</h1>

      <v-card class="d-flex justify-space-between mt-10" flat tile>
        <v-btn :to="`/`" color="primary" nuxt
          ><v-icon>mdi-chevron-double-left</v-icon> 一覧に戻る
        </v-btn>
        <v-btn :to="`/event/${this.event.id}/upload`" color="primary">
          画像をアップロード <v-icon>mdi-chevron-double-right</v-icon></v-btn
        >
      </v-card>

      <v-data-table
        :headers="headers"
        :items="this.accessCodes"
        :items-per-page="10"
        :footer-props="{ itemsPerPageOptions: [] }"
        class="elevation-1 mt-8"
        disable-sort
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>アクセスコード</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            <template>
              <v-btn
                color="grey darken-1"
                dark
                class="mb-2"
                @click="createAccessCode"
              >
                アクセスコードを発行する
              </v-btn>
            </template>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn
            class="ma-2"
            outlined
            color="gray"
            @click="deleteAccessCode(item.id)"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-container>
  </v-main>
</template>

<script>
import firebase from "~/plugins/firebase";
const db = firebase.firestore();

export default {
  data: () => ({
    headers: [
      { text: "アクセスコード", value: "id" },
      { text: "操作", value: "actions" },
    ],
    accessCodes: [],
    event: {
      id: "",
      data: "",
    },
    eventName: "",
  }),
  methods: {
    eventRef() {
      return db.doc("events/" + this.$route.params.id);
    },
    getAccessCodes() {
      firebase
        .firestore()
        .collection("accessCodes")
        .where("event", "==", this.eventRef())
        .get()
        .then((docs) => {
          this.accessCodes = [];
          docs.forEach((doc) => {
            this.accessCodes.push(doc);
          });
        });
    },
    createAccessCode() {
      const res = confirm("アクセスコードを発行しますか？");
      if (res) {
        const dt = new Date();
        dt.setMonth(dt.getMonth() + 3);
        const data = db
          .collection("accessCodes")
          .doc()
          .set({ WatchingPeriod: dt, event: this.eventRef() });
        this.getAccessCodes();
      }
    },
    deleteAccessCode(uid) {
      let res = confirm("本当に削除しますか？");
      if (res) {
        db.collection("accessCodes").doc(uid).delete().then((doc) => {
          this.getAccessCodes();
        });
      }
    },
  },
  created() {
    this.eventRef()
      .get()
      .then((doc) => {
        this.event.data = doc.data();
        this.event.id = doc.id;
      });
    this.getAccessCodes();
  },
};
</script>

<style>
</style>