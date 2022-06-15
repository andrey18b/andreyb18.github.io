<template>
  <v-app>
    <navigation-header />
    <v-main>
      <router-view />
    </v-main>
    <information-footer />
  </v-app>
</template>

<script>
  import InformationFooter from "./components/InformationFooter.vue";
  import NavigationHeader from "./components/NavigationHeader.vue";
  export default {
    name: "App",

    data: () => ({
      //
    }),
    components: {
      InformationFooter,
      NavigationHeader,
    },
  };
</script>
