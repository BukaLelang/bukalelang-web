<template>
  <v-row>
   <v-col xs4>
   </v-col>

   <v-col md4 xs12 >
     <v-card v-for="i in 3" :key="i" class="ma-3 ">
         <v-card-row class="blue-grey darken-1">
             <v-card-title>
                 <span class="white--text">Kamera Antik</span>
                 <v-spacer></v-spacer>
             </v-card-title>
         </v-card-row>
         <v-card-row img="/public/doc-images/cards/space.jpg" height="300px"></v-card-row>
         <v-card-text class="blue-grey darken-3 white--text">
             <div >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
         </v-card-text>
         <v-card-row actions class="blue-grey darken-1 mt-0">
             <v-btn flat class="white--text">Ikut Lelang</v-btn>
             <v-spacer></v-spacer>
             <v-btn icon>
                 <v-icon class="white--text">explore</v-icon>
             </v-btn>
         </v-card-row>
     </v-card>

   </v-col>
   <v-col xs4>
   </v-col>
  </v-row>
</template>

<script>
let host = 'http://localhost:3000/api';
export default {
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<style>
</style>
