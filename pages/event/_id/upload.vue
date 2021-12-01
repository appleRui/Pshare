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

      <file-pond
        name="image-upload-form"
        label-idle="ドラック＆ドロップしてね"
        v-bind:allow-multiple="true"
        accepted-file-types="image/jpeg, image/png"
        :files="myFiles"
        @init="handleFilePondInit"
      />
    </v-container>
  </v-main>
</template>

<script>
// Import Vue FilePond
import vueFilePond from "vue-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import FilePond plugins
// Please note that you need to install these plugins separately

// Import image preview plugin styles
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";

// Import image preview and file type validation plugins
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";

// Create component
const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);

export default {
  methods: {
    handleFilePondInit: function () {
      console.log("FilePond has initialized");

      // FilePond instance methods are available on `this.$refs.pond`
    },
  },
  components: {
    FilePond,
  },
};
</script>

<style>
</style>