<template>
  <div>
    <div class="d-none d-md-block">
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
    </div>
    <div class="d-md-none">
      <v-app-bar app color="white" elevation="0" class="justify-space-around">
        <v-container class="py-0 fill-height">
          <div class="text-center">
            <v-menu>
              <template v-slot:activator="{ on, attrs }">
                <v-app-bar-nav-icon v-bind="attrs" v-on="on"></v-app-bar-nav-icon>
              </template>

              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-btn elevation="0" text :to="item.name">{{ item.title }}</v-btn>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>

          <v-card-title color="grey" class="text-h5"
            >Andrey
            <div class="ml-2 secondary--text font-weight-medium">Bryutkin</div></v-card-title
          >
        </v-container>
      </v-app-bar>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        toggle_exclusive: undefined,
        drawer: false,
        group: null,
        items: [
          { title: "About Me", name: "about" },
          { title: "CV", name: "cv" },
        ],
        absolute: true,
        overlay: false,
      };
    },
    watch: {
      group() {
        this.drawer = false;
      },
    },
    methods: {
      navigationTo(to) {
        this.$router.push(to);
      },
    },
  };
</script>

<style></style>
