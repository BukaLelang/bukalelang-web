<template>
  <v-row>
   <v-col xs3>
   </v-col>
   <v-col md6 xs12 >
     <v-card class="ma-3" >
         <v-card-row>
           <div class="thumbnail">
             <img src="https://s1.bukalapak.com/img/1353479911/large/picture.jpg"  class="portrait" alt="Image" />
           </div>
           <!-- <img :src="i.images" style="width:100%;" alt=""> -->
         </v-card-row>
         <v-card-text class="grey lighten-4 black--text">
           <span class="headline mb-2">Ini judul</span >
             <p class="mt-2 grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
         </v-card-text>
         <v-card-row actions class="grey mt-0">
             <span>Countdown</span>
             <v-spacer></v-spacer>
             <v-btn icon>
                 <v-icon class="pink--text">explore</v-icon>
             </v-btn>
         </v-card-row>
         <v-card-text class="grey lighten-4 black--text">
           <h3 class="title mb-2  text-md-center text-lg-center text-xs-center pink--text">Unduh Aplikasi BukaLelang <br> untuk Ikutan Lelang</h3 >
             <p class="mt-2 grey-text text-md-center text-lg-center text-xs-center">Kamu belum bisa mengikuti lelang di versi Web, unduh aplikasi BukaLelang untuk Android dan (segera) di iOS  untuk ikutan lelang sekarang juga!</p>
             <v-row>
              <v-col xs12 md6 class="text-xs-center text-md-right" >
                 <v-btn class="pink text-xs-right text-md-right text-lg-right">Download Android
                    <v-icon right>get_app</v-icon>
                  </v-btn>
             </v-col>
              <v-col xs12 md6 class="text-xs-center text-md-left">
                 <v-btn class="pink" disabled>Download iOS
                    <v-icon right>get_app</v-icon>
                  </v-btn>
             </v-col>
           </v-row>
           </v-card-text>
     </v-card>

   </v-col>
   <v-col xs3>
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
      axios.get(host + 'auctions')
      .then(response => {
        // JSON responses are automatically parsed.
        console.log('-------', response.data);
        this.auctions = response.data.auctions
      })
      .catch(e => {
        console.log(e);
      })
    }
}
</script>

<style>
.thumbnail {
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
}
.thumbnail img {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 100%;
  width: auto;
  -webkit-transform: translate(-50%,-50%);
      -ms-transform: translate(-50%,-50%);
          transform: translate(-50%,-50%);
}
.thumbnail img.portrait {
  width: 100%;
  height: auto;
}
</style>
