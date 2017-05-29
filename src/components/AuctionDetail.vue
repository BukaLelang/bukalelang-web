<template>
  <v-row>
   <v-col xs3>
   </v-col>
   <v-col md6 xs12 >
     <v-card class="ma-3" >
         <v-card-row>
           <div class="thumbnail">
             <img :src="auction.images[0]"  class="portrait" alt="Image" />
           </div>
           <!-- <img :src="i.images" style="width:100%;" alt=""> -->
         </v-card-row>
         <v-card-text class="grey lighten-4 black--text">
           <span class="headline mb-2">{{ auction.title }}</span >
             <p class="mt-2 grey-text">{{ auction.description }}</p>
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
           </v-card-text>
     </v-card>

   </v-col>
   <v-col xs3>
   </v-col>
  </v-row>
</template>

<script>
import axios from 'axios';
let host = 'https://api.bukalelang.id/';
export default {
    data() {
        return {
          auction: {}
        }
    },
    // Fetches posts when the component is created.
    created() {
      axios.get(host + 'auctions/slug/' + this.$route.params.slug)
      .then(response => {
        // JSON responses are automatically parsed.
        this.auction = response.data
      })
      .catch(e => {
        console.log(e);
      })
    },
    methods: {
      downloadAndroidApp() {
        window.location.href = 'https://s3-ap-southeast-1.amazonaws.com/elasticbeanstalk-ap-southeast-1-806473761630/mobile-app/BukaLelang.apk'
      }
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
