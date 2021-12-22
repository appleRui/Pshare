<template>
  <v-navigation-drawer app>
    <user-card />
    <v-divider></v-divider>
    <side-item-list
      :dialog="this.dialog"
      @dailogStateChange="dailogStateChange"
    />
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    dailogStateChange(){
      this.$emit("dailogStateChange");
    }
  }
};
</script>

<style>
</style>