<template>
  <v-text-field
    v-model="setPassword"
    :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
    :type="passwordShow ? 'text' : 'password'"
    dense
    height="48px"
    name="input-password"
    outlined
    placeholder="パスワード"
    @click:append="passwordShow = !passwordShow"
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      passwordShow: false,
    };
  },
  props: {
    password: {
      type: String,
      default: "",
    },
  },
  computed: {
    setPassword: {
      get() {
        return this.password;
      },
      set(newVal) {
        return this.$emit("update:password", newVal);
      },
    },
  },
};
</script>