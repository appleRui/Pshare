<template>
  <v-text-field
    v-model="setEmail"
    autofocus
    dense
    height="48px"
    outlined
    placeholder="メールアドレス"
  ></v-text-field>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      default: "",
    },
  },
  computed: {
    setEmail: {
      get() {
        return this.email;
      },
      set(newVal) {
        return this.$emit("update:email", newVal);
      },
    },
  },
};
</script>