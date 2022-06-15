<template>
  <v-container>
    <v-divider></v-divider>
    <div class="d-none d-md-block">
      <v-row no-gutters>
        <v-col class="ma-1 font-weight-black secondary--text"
          ><v-card-title>{{ title }}</v-card-title></v-col
        >
        <v-col cols="12" class="ma-1">
          <v-timeline>
            <v-timeline-item v-for="(point, n) in time_points" :key="n" color="secondary" class="pa-1">
              <template v-slot:opposite>
                <span class="secondary--text">{{ point.date }}</span>
              </template>
              <v-card class="pa-2 elevation-2" style="border: 1px solid #446a46">
                <v-card-subtitle class="text-subtitle-2 pt-0 mb-n3 secondary--text">{{ point.title }} </v-card-subtitle>
                <v-card-text v-for="(tag, index) in point.description" :key="index" class="text-caption py-0 my-0">
                  <v-icon size="10px">mdi-rhombus-split</v-icon> {{ tag }}
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </div>
    <div class="d-md-none">
      <v-row no-gutters>
        <v-col class="ma-1 font-weight-black secondary--text"
          ><v-card-title>{{ title }}</v-card-title></v-col
        >
        <v-col cols="12" class="ma-1">
          <v-timeline dense>
            <v-timeline-item v-for="(point, n) in time_points" :key="n" color="secondary" class="pa-1">
              <v-card class="pa-2 elevation-2" style="border: 1px solid #446a46">
                <v-card-subtitle class="text-subtitle-2 pt-0 mb-n3 secondary--text">{{ point.title }} </v-card-subtitle>
                <v-card-subtitle class="text-caption font-weight-medium pt-0 mb-n3 secondary--text">{{ point.date }} </v-card-subtitle>
                <v-card-text v-for="(tag, index) in point.description" :key="index" class="text-caption py-0 my-0">
                  <v-icon size="10px">mdi-rhombus-split</v-icon> {{ tag }}
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: "TimelineBar",

    data: () => ({}),
    props: {
      title: {
        type: String,
        required: true,
      },
      time_points: {
        type: Array,
        required: true,
      },
    },
  };
</script>
