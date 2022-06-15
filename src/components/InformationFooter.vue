<template>
  <v-footer padless color="white">
    <v-col class="text-center" cols="12">
      <v-card-text class="my-0">
        <v-btn v-for="(icon, n) in icons" :key="n" class="mx-4 my-0 secondary--text" icon>
          <v-btn :href="icon.href" fab elevation="0" color="white">
            <v-icon color="secondary" size="24px">
              {{ icon.icon }}
            </v-icon>
          </v-btn>
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
        icons: [
          {
            icon: "mdi-facebook",
            href: "https://www.facebook.com/andrey.bryutkin",
          },
          {
            icon: "mdi-linkedin",
            href: "https://www.linkedin.com/in/andrey-bryutkin-03462b194/",
          },
          {
            icon: "mdi-github",
            href: "https://github.com/andrey18b",
          },
        ],
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
