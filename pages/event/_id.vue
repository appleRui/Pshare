<template>
  <v-main>
    <v-container class="py-8 px-6" fluid>
      <h1>{{ this.event.eventName }}</h1>

      <v-card class="d-flex justify-space-between mt-10" flat tile>
        <v-btn :to="`/`" color="primary" nuxt
          ><v-icon>mdi-chevron-double-left</v-icon> 一覧に戻る
        </v-btn>
        <v-btn color="primary">
          画像をアップロード <v-icon>mdi-chevron-double-right</v-icon></v-btn
        >
      </v-card>

      <v-data-table
        :headers="headers"
        :items="accessCodes"
        :items-per-page="5"
        class="elevation-1 mt-8"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>アクセスコード</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-btn color="gray">
              アクセスコードを生成する
            </v-btn>
          </v-toolbar>
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
      { text: "アクセスコード", value: "uid" },
      { text: "操作", value: "action" },
    ],
    accessCodes: [
      {
        uid: "dgegg3tergggver",
      },
      {
        uid: "dgegg3tergggver",
      },
      {
        uid: "dgegg3tergggver",
      },
      {
        uid: "dgegg3tergggver",
      },
      {
        uid: "dgegg3tergggver",
      },
      {
        uid: "dgegg3tergggver",
      },
    ],
    event: [],
  }),
  created() {
    const current_event = db.collection("events").doc(this.$route.params.id);
    current_event.get().then((res) => {
      this.event = res.data();
    });
  },
};
</script>

<style>
</style>