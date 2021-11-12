<template>
  <v-text-field
    v-model="password"
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
export default {};
</script>