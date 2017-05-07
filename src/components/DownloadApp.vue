<template>
  <v-row>
   <v-col xs4>
   </v-col>
   <v-col md4 xs12 >
     Apps

   </v-col>
   <v-col xs4>
   </v-col>
  </v-row>
</template>

<script>
import axios from 'axios';
let host = 'http://api.bukalelang.id/';
export default {
    data() {
        return {
          auctions: []
        }
    },
    // Fetches posts when the component is created.
    created() {
      console.log('ini berhasil dibuat');

    }
}
</script>

<style>

</style>
