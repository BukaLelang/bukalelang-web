<template>
  <v-row>
   <v-col xs2>
   </v-col>
   <v-col md8 xs12 >
     <h3 class="pa-3 display-1 text-md-center text-lg-center text-xs-center">Unduh aplikasi BukaLelang</h3>
       <p class="pa-3 text-md-center text-lg-center text-xs-center">Saat ini BukaLelang versi Web belum tersedia, <br>namun, Aplikasi BukaLelang sudah dapat di gunakan di Android dan (segera) di iOS</p>
        <v-row>
         <v-col xs12 md6 class="text-xs-center text-md-right" >
            <v-btn class="pink text-xs-right text-md-right text-lg-right" @click.native="downloadAndroidApp">Download Android
               <v-icon right>get_app</v-icon>
             </v-btn>
        </v-col>
         <v-col xs12 md6 class="text-xs-center text-md-left">
            <v-btn class="pink" disabled>Download iOS
               <v-icon right>get_app</v-icon>
             </v-btn>
        </v-col>
      </v-row>


   </v-col>
   <v-col xs2>
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

    },
    methods: {
      downloadAndroidApp() {
        window.location.href = 'https://s3-ap-southeast-1.amazonaws.com/elasticbeanstalk-ap-southeast-1-806473761630/mobile-app/bukalelang.apk'
      }
    }
}
</script>

<style>

</style>
