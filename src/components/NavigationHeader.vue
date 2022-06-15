<template>
  <v-app-bar app color="white" elevation="0" class="justify-space-around">
    <v-container class="py-0 fill-height">
      <v-card-title color="grey" class="text-h5"
        >Andrey
        <div class="ml-2 secondary--text font-weight-medium">Bryutkin</div></v-card-title
      >
      <v-spacer></v-spacer>
      <div>
        <v-btn text large elevation="0" @click="navigationTo({ name: 'about' })">About Me</v-btn>
        <v-btn text large elevation="0" @click="navigationTo({ name: 'cv' })">CV</v-btn>
        <!-- <v-btn text large elevation="0" @click="navigationTo({ name: 'projects' })">Projects</v-btn> -->
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
  export default {
    data() {
      return {
        toggle_exclusive: undefined,
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
