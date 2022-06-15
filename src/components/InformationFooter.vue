<template>
  <v-footer padless color="white">
    <v-col class="text-center" cols="12">
      <v-card-text class="my-0">
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 my-0 secondary--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-breadcrumbs divider="/" class="d-flex justify-center my-0">
        <v-breadcrumbs-item class="secondary--text font-weight-bold" @click="navigationTo({ name: 'about' })"> About Me </v-breadcrumbs-item>
        <v-breadcrumbs-item class="secondary--text font-weight-bold"> / </v-breadcrumbs-item>
        <v-breadcrumbs-item @click="navigationTo({ name: 'cv' })" class="secondary--text font-weight-bold text-decoration-none"> CV </v-breadcrumbs-item>
        <!-- <v-breadcrumbs-item class="secondary--text font-weight-bold"> / </v-breadcrumbs-item>
        <v-breadcrumbs-item class="secondary--text font-weight-bold"> Projects </v-breadcrumbs-item> -->
      </v-breadcrumbs>
    </v-col>
  </v-footer>
</template>

<script>
  export default {
    data() {
      return {
        icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-github", "mdi-at"],
      };
    },
    methods: {
      navigationTo(to) {
        this.$router.push(to);
      },
    },
  };
</script>

<style></style>
