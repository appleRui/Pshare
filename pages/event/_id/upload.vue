<template>
  <v-main>
    <v-container class="py-8 px-6" fluid>
      <h1 class="pade-ttl">画像のアップロード</h1>

      <v-card class="d-flex justify-space-between mt-10" flat tile>
        <v-btn :to="`/event/${this.$route.params.id}`" color="primary" nuxt
          ><v-icon>mdi-chevron-double-left</v-icon> コード一覧へ
        </v-btn>
        <v-btn :to="`/`" color="primary">
          イベント一覧へ <v-icon>mdi-chevron-double-right</v-icon></v-btn
        >
      </v-card>

      <div class="image-upload-wrapper mt-5">
        <file-pond
          name="image-upload-form"
          label-idle="ドラック＆ドロップしてね"
          ref="image"
          maxFiles="50"
          allowMultiple="true"
          allowRemove="false"
          allowRevert="false"
          accepted-file-types="image/jpeg, image/png"
          :server="this.server"
        />
      </div>

      <div class="images-wrapper">
        <div class="ttl-wrapper">
          <h2 class="ttl">画像一覧</h2>
        </div>
        <div class="d-flex flex-wrap images-cards">
          <v-card
            class="mx-auto card"
            max-width="280"
            v-for="res in sources"
            :src="res.url"
            alt=""
            :key="res.name"
          >
            <v-img :src="res.url" height="200px"></v-img>
            <v-card-title>{{ res.name }}</v-card-title>
            <v-card-actions>
              <v-btn rounded plain @click="destoryimage(res.name)"
                ><v-icon>mdi-delete</v-icon></v-btn
              >
            </v-card-actions>
          </v-card>
        </div>
      </div>

      <v-dialog v-model="processDialog" persistent max-width="320">
        <v-card>
          <v-card-title class="text-h6">
            追加する写真はありますか？
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="addImages(false)">
              いいえ
            </v-btn>
            <v-btn color="green darken-1" text @click="addImages(true)">
              はい
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-main>
</template>

<script>
import vueFilePond from "vue-filepond";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import { setOptions } from "filepond";
import firebase from "~/plugins/firebase";

const storage = firebase.storage();

const FilePond = vueFilePond(
  FilePondPluginFileValidateType,
  FilePondPluginImagePreview
);

export default {
  asyncData({ fireabse }) {
    const data = [];
    firebase
      .storage()
      .ref()
      .child("apuQNyft4jPh0CoZZKY4")
      .listAll()
      .then((res) => {
        res.items.forEach((item) => {
          const name = storage.ref().child(item.fullPath).name;
          storage
            .ref()
            .child(item.fullPath)
            .getDownloadURL()
            .then((res) => {
              const url = res;
              const img = {
                name: name,
                url: url,
              };
              data.push(img);
            });
        });
      });
    return {
      sources: data,
    };
  },
  data() {
    return {
      processDialog: false,
      server: {
        process: (
          fieldName,
          file,
          metadata,
          load,
          error,
          progress,
          abort,
          transfer,
          options
        ) => {
          const uploadRef = storage
            .ref()
            .child(`${this.$route.params.id}/${file.name}`);
          uploadRef
            .put(file)
            .then((file) => {
              load(file);
            })
            .catch((e) => {
              alert(e);
            });
        },
      },
    };
  },
  methods: {
    addImages(bol) {
      if (bol) {
        this.processDialog = false;
      } else {
        location.reload(false);
      }
    },
    destoryimage(file) {
      let bol = confirm("本当に削除しますか？");
      if (bol) {
        storage
          .ref()
          .child(this.$route.params.id + "/" + file)
          .delete();
      }
    },
  },
  mounted() {
    document.addEventListener("FilePond:processfiles", (e) => {
      this.processDialog = true;
    });
  },
  created() {},
};
</script>
<style lang="scss" scoped>
.ttl-wrapper {
  margin: 0.5rem 0;
  .ttl {
    font-size: 28px;
  }
}
.images-cards {
  .card {
    margin: 0.5rem !important;
  }
}
</style>