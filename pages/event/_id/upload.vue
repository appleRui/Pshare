<template>
  <v-main>
    <v-container class="py-8 px-6" fluid>
      <h1>画像のアップロード</h1>

      <v-card class="d-flex justify-space-between mt-10" flat tile>
        <v-btn :to="`/event/${this.$route.params.id}`" color="primary" nuxt
          ><v-icon>mdi-chevron-double-left</v-icon> コード一覧へ
        </v-btn>
        <v-btn :to="`/`" color="primary">
          イベント一覧へ <v-icon>mdi-chevron-double-right</v-icon></v-btn
        >
      </v-card>

    </v-container>
  </v-main>
</template>

<script>
export default {};
</script>

<style>
</style>