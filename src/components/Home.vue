<template>
  <v-row>
   <v-col xs4>
   </v-col>
   <v-col md4 xs12 >
     <v-card v-for="auction in auctions" :key="auction" class="ma-3" >
         <v-card-row>
           <div class="thumbnail">
             <img :src="auction.images"  class="portrait" alt="Image" />
           </div>
           <!-- <img :src="i.images" style="width:100%;" alt=""> -->
         </v-card-row>
         <v-card-text class="grey lighten-4 black--text">
           <span class="headline mb-2">{{auction.title}}</span >
             <p class="mt-2 grey-text">{{auction.description}}</p>
         </v-card-text>
         <v-card-row actions class="grey lighten-4 mt-0">
             <v-btn flat class="pink--text" large @click.native="gotoAuctionDetail(auction.slug)">Ikut Lelang</v-btn>
             <v-spacer></v-spacer>
             <v-btn icon>
                 <v-icon class="pink--text">explore</v-icon>
             </v-btn>
         </v-card-row>
     </v-card>

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
      axios.get(host + 'auctions')
      .then(response => {
        // JSON responses are automatically parsed.
        console.log('-------', response.data);
        this.auctions = response.data.auctions
      })
      .catch(e => {
        console.log(e);
      })
    },
    methods: {
      gotoAuctionDetail(slug) {
        this.$router.push('/lelang/' + slug)
      }
    }
}
</script>

<style>
.thumbnail {
  position: relative;
  width: 100%;
  height: 250px;
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
