<template>
  <v-app id="inspire">
    <v-navigation-drawer app>
      <v-sheet color="grey lighten-4" class="pa-4">
        <v-avatar class="mb-4" color="grey darken-1" size="64"
          ><img :src="avatarIconURL" alt=""
        /></v-avatar>
        <div>{{ this.$store.state.user.email }}</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list>
        <v-list-item @click="logout">
          <v-list-item-content>
            <v-list-item-title>ログアウト</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data: () => ({}),
  middleware: "auth",
  methods: {
    logout() {
      let res = confirm("ログアウトしますか？");
      if (res) {
        this.$store.dispatch("logout");
      }
    },
  },
  computed: {
    avatarIconURL: function () {
      return this.$store.state.user.avatarIcon;
    },
  },
  created() {},
};
</script>