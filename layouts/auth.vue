<template>
  <v-app>
    <v-app-bar height="128px" color="#F5F5F5" dense flat>
      <div class="header-title justify-center d-flex fill-width">
        <nuxt-link to="/"> </nuxt-link>
      </div>
    </v-app-bar>
    <v-content
      style="background: #f5f5f5; height: auto"
      class="pa-0 fill-height"
    >
      <v-container
        :class="{ 'pa-0': $vuetify.breakpoint.sm || $vuetify.breakpoint.xs }"
      >
        <nuxt />
      </v-container>
    </v-content>
    <footer style="background: #f5f5f5">
      <div class="pa-8 d-flex flex-warp justify-center fill-wdith"></div>
    </footer>
  </v-app>
</template>