<template>
  <div>
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <v-avatar width="375" height="375"><v-img :src="require('../assets/profil.jpeg')" class="my-3" contain height="400" /></v-avatar>
        </v-col>

        <v-col cols="12" class="mb-0">
          <h1 class="display-2 font-weight-regular mb-0">Andrey Bryutkin</h1>
          <v-card-text class="my-0"> Physics/Mathematics student, Software enthusiast, Passionate Tennis Player </v-card-text>
        </v-col>
        <div class="d-md-none">
          <v-col cols="12">
            <v-card-text class="font-weight-bold my-n2 d-flex justify-start">Hello there,</v-card-text>
            <v-card-text class="text-justify ma-n2">
              I am Andrey Bryutkin. I finished my Bachelor in physics at ETH Zürich in 2022 and will enter Part III at the University of Cambridge. I have a
              passion for automation, statistics and problem solving. My studies at ETH Zurich enabled me to acquire a thorough understanding of theoretical
              concepts as well as their applications in the industry. In addition to that they develop my analytical thinking and problem solving skills.
              Moreover, I like to keep myself fit by working out and playing sports like swimming, tennis, and karate.
              <br /><br />
              Besides learning new skills, I am gaining experience by teaching classes and participating in research projects.
            </v-card-text>
          </v-col>
        </div>
      </v-row>
      <div class="d-none d-md-block">
        <v-row justify="center">
          <v-col cols="6">
            <v-card-text class="font-weight-bold my-n2 d-flex justify-start">Hello there,</v-card-text>
            <v-card-text class="text-justify ma-n2">
              I am Andrey Bryutkin. I finished my Bachelor in physics at ETH Zürich in 2022 and will enter Part III at the University of Cambridge. I have a
              passion for automation, statistics and problem solving. My studies at ETH Zurich enabled me to acquire a thorough understanding of theoretical
              concepts as well as their applications in the industry. In addition, they help develop my analytical thinking and problem solving skills.
              Moreover, I like to keep myself fit by working out and playing sports like swimming, tennis, and karate.
              <br /><br />
              Besides learning new skills, I am gaining experience by teaching classes and participating in research projects.
            </v-card-text>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: "AboutMePage",

    components: {},
  };
</script>
