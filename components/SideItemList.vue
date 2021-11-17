<template>
  <v-list>

    <v-list-item @click.stop="dailogStateChange">
      <v-list-item-content>
        <v-list-item-title>イベント追加</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item @click="logout">
      <v-list-item-content>
        <v-list-item-title>ログアウト</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

  </v-list>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    logout() {
      let res = confirm("ログアウトしますか？");
      if (res) {
        this.$store.dispatch("logout");
      }
    },
    dailogStateChange() {
      this.$emit('dailogStateChange')
    }
  }
};
</script>

<style>
</style>