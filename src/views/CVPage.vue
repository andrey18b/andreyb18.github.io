<template>
  <div>
    <v-container>
      <v-row class="mt-10" no-gutters>
        <v-col class="ma-2" color="secondary">
          <v-card flat>
            <v-card-title class="secondary--text darken-3">Personal Information</v-card-title>
            <v-list two-line>
              <v-list-item class="my-n3" v-for="(info, n) in personalInfo" :key="n">
                <v-list-item-icon
                  ><v-icon color="secondary">{{ info.icon }}</v-icon></v-list-item-icon
                >
                <v-list-item-content>
                  <v-list-item-title class="font-weight-medium">{{ info.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ info.details }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col class="ma-2">
          <v-card flat>
            <v-card-title class="secondary--text">Contact Information</v-card-title>
            <v-list two-line>
              <v-list-item class="my-n3" v-for="(info, n) in contactInfo" :key="n">
                <v-list-item-icon
                  ><v-icon color="secondary">{{ info.icon }}</v-icon></v-list-item-icon
                >
                <v-list-item-content>
                  <v-list-item-title>{{ info.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ info.details }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card></v-col
        >
      </v-row>
      <timeline-bar v-for="(step, n) in life_steps" :key="n" :title="step.title" :time_points="step.time_points"></timeline-bar>
      <v-divider></v-divider>
      <div class="my-10">
        <v-card-title class="secondary--text">Awards & Honors </v-card-title>
        <v-list three-line>
          <v-list-item v-for="(award, n) in awards" :key="n">
            <v-list-item-icon>
              <v-icon>mdi-rhombus-split</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-medium"
                >{{ award.title }}<span class="secondary--text"> ({{ award.duration }})</span></v-list-item-title
              >
              <v-list-item-subtitle>{{ award.description }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>

      <v-divider></v-divider>
      <div class="my-10">
        <v-card-title class="secondary--text">Programming Skills </v-card-title>
        <v-row>
          <v-col cols="6">
            <v-card flat>
              <div v-for="(skill, n) in programming_skills_1" :key="n">
                <v-card-subtitle class="text-subtitle-1 font-weight-bold mb-n3 ml-0">{{ skill.title }}</v-card-subtitle>
                <v-progress-linear color="secondary" rounded height="8" class="ml-4 mr-12" :value="skill.value"></v-progress-linear>
              </div>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card flat>
              <div v-for="(skill, n) in programming_skills_2" :key="n">
                <v-card-subtitle class="text-subtitle-1 font-weight-bold mb-n3 ml-n3">{{ skill.title }}</v-card-subtitle>
                <v-progress-linear color="secondary" rounded height="8" :value="skill.value"></v-progress-linear>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <v-divider></v-divider>
      <div class="my-10">
        <v-card-title class="secondary--text">Hobbies </v-card-title>
        <v-chip small color="secondary" class="ma-1" v-for="(hobby, l) in hobbies" :key="l">
          <v-icon class="mr-2"> {{ hobby.icon }} </v-icon>
          {{ hobby.name }}
        </v-chip>
      </div>
      <v-divider></v-divider>
      <div class="my-10">
        <v-card-title class="secondary--text">Languages </v-card-title>
        <v-row>
          <v-col cols="6">
            <v-card flat>
              <div v-for="(language, n) in languages" :key="n">
                <v-card-subtitle class="text-subtitle-1 font-weight-bold mb-n3 ml-0">{{ language.title }}</v-card-subtitle>
                <v-progress-linear color="secondary" rounded height="8" class="ml-4 mr-12" :value="language.value"></v-progress-linear>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <v-divider></v-divider>
    </v-container>
  </div>
</template>

<script>
  import TimelineBar from "@/components/TimelineBar.vue";

  export default {
    name: "CVPage",
    data() {
      return {
        personalInfo: [
          {
            name: "Nationality",
            icon: "mdi-passport",
            details: "German",
          },
          {
            icon: "mdi-calendar-today",
            name: "Date of Birth",
            details: "18.04.2001",
          },
          {
            icon: "mdi-map-marker",
            name: "Born in",
            details: "Saratov (Russia)",
          },
        ],
        contactInfo: [
          {
            icon: "mdi-phone",
            name: "Phone (German)",
            details: "+49 1633779913",
          },
          {
            icon: "mdi-map",
            name: "Living in",
            details: "Zurich (Switzerland)",
          },
          {
            icon: "mdi-email",
            name: "E-Mail",
            details: "andrey.bryutkin@gmail.com",
          },
        ],
        hobbies: [
          {
            name: "Physics",
            icon: "mdi-atom",
          },
          {
            name: "Mathematics",
            icon: "mdi-calculator",
          },
          {
            name: "Programming",
            icon: "mdi-code-brackets",
          },
          {
            name: "Tennis",
            icon: "mdi-tennis",
          },
          {
            name: "Swimming",
            icon: "mdi-swim",
          },
          {
            name: "Karate",
            icon: "mdi-karate",
          },
          {
            name: "Piano",
            icon: "mdi-piano",
          },
        ],
        programming_skills_1: [
          {
            title: "Python",
            value: "90",
          },
          {
            title: "HTML/CSS",
            value: "40",
          },
          {
            title: "JavaScript",
            value: "60",
          },
          {
            title: "Vue 2",
            value: "60",
          },
        ],
        programming_skills_2: [
          {
            title: "Latex",
            value: "85",
          },
          {
            title: "C++",
            value: "50",
          },
          {
            title: "ROS",
            value: "30",
          },
          {
            title: "Matlab",
            value: "30",
          },
        ],
        awards: [
          {
            title: "Part III International Scholarship",
            duration: "Oct. 2022 - Jum. 2023",
            description: "The Scholarship is funded by the Faculty of Mathematics and the School of Physical Sciences (Value: £8,829)",
          },
          {
            title: "Christ’s College Postgraduate Bursary",
            duration: "Oct. 2022 - Jun. 2023",
            description: "Awarded by the Christ’s College at University of Cambridge for the MASt in Mathematics (Value: £3000)",
          },
          {
            title: "German Academic Scholarship Foundation",
            duration: "Nov. 2019 - Present",
            description: "Awarded to students who are expected to make an outstanding contribution to society.",
          },
          {
            title: "Hans-Messer Foundation",
            duration: "Nov. 2020 - Present",
            description: "Awarded based on expected outstanding work in natural sciences.",
          },
          {
            title: "Teaching Assistant Award",
            duration: "May 2021",
            description: "Award for one of the best teaching performances in the departments of physics and mathematics at ETH Zurich",
          },
          {
            title: "Award by state prime minister",
            duration: "June 2019",
            description: " Award by state prime minister for outstanding achievements during German Abitur",
          },
        ],
        languages: [
          {
            title: "German",
            value: "100",
          },
          {
            title: "English",
            value: "80",
          },
          {
            title: "Russian",
            value: "90",
          },
          {
            title: "Spanish",
            value: "30",
          },
        ],
        life_steps: [
          {
            title: "Education",
            time_points: [
              {
                date: "Oct. 2022 - Jun. 2023",
                title: "Master of Advanced Studies in Mathematics (University of Cambridge)",
                description: ["Focusing on applied mathematics subjects, especially the combination of analysis and statistics"],
              },
              {
                date: "Sep. 2019 - Sep. 2022",
                title: "Bachelor of Science - Physics (ETH Zurich)",
                description: [
                  "Expected graduation in Sep. 2022 (average grade: 5.8/6.0)",
                  "Took additional classes in mathematics in physics (overall 210 ECTS / 180 ECTS)",
                  "Course representative in various courses. Participated in teaching assistant collaborations to improve teaching during the pandemic",
                ],
              },
              {
                date: "Sep. 2021 - Dec. 2021",
                title: "Bachelor of Science - Physics (University of Toronto)",
                description: [
                  "Exchange Semester at University of Toronto",
                  "Supervised Reading Course in Theoretical Physics",
                  "Supervisor: Prof. Michael Luke",
                ],
              },
              {
                date: "Sep. 2011 - Dec. 2019",
                title: "German Abitur - Friedrich-Wilhelm-Gymnasium",
                description: ["Grade: 1.0 (0,9)", "head boy", "course representative"],
              },
              {
                date: "2018-2019",
                title: "Pupils at the University",
                description: [
                  "Attending courses and exams of physics and math at University of Cologne.",
                  "Paper: Fundamental solutions of Partial Differential Equations in Physics.",
                ],
              },
            ],
          },
          {
            title: "Professional Experience",
            time_points: [
              {
                date: "Feb. 2022 - May 2022",
                title: "Software Engineer Intern at pick8ship",
                description: [
                  "Designed a database model for a fleet management system",
                  "Developed optimization algorithms for storage management",
                  "Designed interfaces for delivery and order management",
                ],
              },
              {
                date: "Sep. 2020 - Dec. 2020",
                title: "Research Assistant at Particle Physics Group (ETH Zurich/ CERN)",
                description: [
                  "Supervised by Prof. Rainer Wallny",
                  "Learned data analysis, designed a lab monitoring system and an interface for it",
                  "Redesigned the whole system measuring temperature, humidity and additional parameters.",
                  "Created a sophisticated data management system using InfluxDB.",
                ],
              },
              {
                date: "Sep. 2020 - present",
                title: "Teaching Assistant in Physics & Mathematics (ETH Zurich)",
                description: [
                  "Teaching exercise classes, correcting assignments, and writing solutions for exercises.",
                  "Computer Science - C++ (Fall 2020 & Fall 2021 (remotely)), Physics II (Spring 2020), Mathematical Methods for Physicist II (Spring 2022)",
                ],
              },
              {
                date: "Jan. 2021, Aug. 2021, Jan. 2022",
                title: "Supervision and Assistance for grading Exams (ETH Zurich)",
                description: [
                  "Supervised exams in Computer Science and Physics II.",
                  "Corrected and wrote solutions for specific exercises in the exam Physics II (especially Special Relativity)",
                ],
              },
              {
                date: "Jan. 2017 - Feb. 2017",
                title: "Internship at Ford Motor Company",
                description: ["Finance Department of the sub-company Cotarko. Creating macros and small algorithms for data management in Excel."],
              },
            ],
          },
          {
            title: "Volunteering",
            time_points: [
              {
                date: "Sep. 2020 - Jul. 2021",
                title: "Board Member of the Maths and Physics Student Association",
                description: [
                  "As Vice-President for External Relations took care of sponsoring and representation of the VMP and solved problems in weekly meetings",
                  "Built new partnerships & sponsorships with other organizations and companies.",
                ],
              },
              {
                date: "Oct. 2020 - Mar. 2021",
                title: "Vice President of Mindphair",
                description: [
                  "Responsible for a team of 6 people organizing the job-fair for mathematicians, physicists and Computer Scientists at ETH.",
                  "Rethinking the whole idea of a job-fair, because of the pandemic and using new tools for a virtual job fair.",
                ],
              },
              {
                date: "Jul. 2020 - Jun. 2021",
                title: "Speaker of the German Academic Scholarship Foundation",
                description: ["Representation of over 150 scholarship holders in Zurich. Organizing events (e.g. mentoring between alumni and the students)."],
              },
              {
                date: "Sep. 2018 - Mar. 2019",
                title: "Participant and Coach b@s - BCG Initiative",
                description: [
                  "business@school is an educational initiative of the international management consulting firm Boston Consulting Group.",
                  "Coached a team of 4 students in research, presentation and organization.",
                ],
              },
            ],
          },
          {
            title: "Projects & Research Experience",
            time_points: [
              {
                date: "Aug. 2022 - Sep. 2022",
                title: "Reading Course - black hole spacetimes in general relativity",
                description: [
                  "Supervised by Dr. Christoph Kehle",
                  "Geometry and analysis of the solutions of the Einstein field equations",
                  "Extending and writing out steps in proofs for the Birkhoff’s theorem left out in the script",
                ],
              },
              {
                date: "Feb. 2022 - Jun. 2022",
                title: "The Sugawara And Coset Construction Derived From The Vertex Operator Formalism",
                description: [
                  "Supervised by Prof. Matthias Gaberdiel",
                  "A formal report with rigorous proofs of the derivation based on then vertex operator formalism",
                  "Collection of examples of the coset construction",
                ],
              },
              {
                date: "Sep. 2021 - Dec. 2021",
                title: "Analysis of the Lie algebra of SU(N)",
                description: [
                  "Under the supervision of Prof. Michael Luke, I completed a research project where I analyzed the Lie algebra structure of SU(4)",
                  "Wrote a program to show the decomposition of a general SU(N) Lie algebra representation into irreducible representation based on Dynkin labels",
                ],
              },
              {
                date: "Jun. 2020 - Jul. 2020",
                title: "Mathematical Model of a Card Game",
                description: [
                  "As part of a research course, I wrote a paper with a group of 4 students, where we formalized mathematically the card game 'Tichu'.",
                  "I programmed simulations to predict the outcomes of our model based on game theoretical models.",
                ],
              },
            ],
          },
        ],
      };
    },
    components: {
      TimelineBar,
    },
  };
</script>

<style></style>
