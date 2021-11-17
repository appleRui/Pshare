<template>
  <v-sheet color="grey lighten-4" class="pa-4">
    <v-avatar class="mb-4" color="grey darken-1" size="64"
      ><img :src="avatarIconURL" alt=""
    /></v-avatar>
    <div>{{ this.$store.state.user.email }}</div>
  </v-sheet>
</template>

<script>
export default {
  computed: {
    avatarIconURL: function () {
      return this.$store.state.user.avatarIcon;
    },
  },
};
</script>

<style>
</style>