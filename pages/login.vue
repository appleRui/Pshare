<template>
  <div>
    <v-card
      :tile="$vuetify.breakpoint.sm || $vuetify.breakpoint.xs"
      class="mx-auto fill-width"
      flat
      max-width="640"
    >
      <v-card-title class="text-center pa-8">
        <h4 class="fill-width">ログイン</h4>
      </v-card-title>
      <v-divider> </v-divider>
      <div class="px-6 py-8">
        <div style="max-width: 344px" class="mx-auto">
          <div>
            <user-form-email :email.sync="params.user.email" />
            <user-form-password
              :password.sync="params.user.password"
              :passwordShow.sync="params.user.passwordShow"
            />
            <div class="login-btn pb-3">
              <v-btn
                color="primary"
                class="fill-width caption"
                depressed
                height="48px"
                tile
                @click="login"
              >
                ログイン
              </v-btn>
            </div>
          </div>

          <div class="separator separator_login_page">
            <div class="middle_separator">または</div>
          </div>
          <div>
            <v-btn
              class="fill-width text-capitalize caption"
              height="48px"
              outlined
              style="border-color: #979797"
              tile
              @click="googleLogin"
            >
              <img
                class="button-logo-img mr-4"
                src="https://madeby.google.com/static/images/google_g_logo.svg"
                style="height: 24px"
              />
              Googleでログイン
            </v-btn>
          </div>
          <div class="pt-6">
            <v-divider></v-divider>
            <div class="pt-8 pb-4 text-center">
              <span>パスワードを忘れた方は</span>
              <nuxt-link to="/">こちら</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: "auth",
  data() {
    return {
      params: {
        user: {
          email: "",
          password: "",
        },
      },
    };
  },
  methods: {
    login() {
      this.$store.dispatch("emailAndPasswordLogin", {
        email: this.params.user.email,
        password: this.params.user.password,
      });
    },
    googleLogin() {
      this.$store.dispatch("googleLogin")
    },
  },
};
</script>