<template>
<v-app top-toolbar>
    <header>
        <v-toolbar class="pink">
            <v-toolbar-side-icon class="hidden-md-and-up" @click.native.stop="sidebar2 = !sidebar2"></v-toolbar-side-icon>
            <!-- <span @click.native="gotoHomepage"> -->
            <div class="" @click.native="gotoHomepage">
              <v-toolbar-title class="hidden-sm-and-down" >BukaLelang</v-toolbar-title>
            </div>
            <!-- </span> -->
            <v-text-field prepend-icon="search" label="Cari lelang..." hide-details single-line dark class="pr-10"></v-text-field>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-toolbar-item @click.native="gotoHomepage">Lelang</v-toolbar-item>
                <v-toolbar-item @click.native="gotoGuide">Panduan</v-toolbar-item>
                <v-toolbar-item @click.native="downloadApp"><b>Download App</b></v-toolbar-item>
                <!-- <v-menu bottom left offset-y origin="top right" transition="v-slide-y-transition">
                    <v-btn icon dark slot="activator">
                        <v-icon>more_vert</v-icon>
                    </v-btn>
                    <v-list>
                        <v-list-item >
                            <v-list-tile>
                                <v-list-tile-title>Lelang</v-list-tile-title>
                            </v-list-tile>
                        </v-list-item>
                        <v-list-item >
                            <v-list-tile>
                                <v-list-tile-title>Download App</v-list-tile-title>
                            </v-list-tile>
                        </v-list-item>
                    </v-list>
                </v-menu> -->
            </v-toolbar-items>
        </v-toolbar>
    </header>
    <main>
        <v-sidebar class="pink darken-1" drawer v-model="sidebar2" height="100%">
            <v-list dense>
              <v-list-item @click.native="gotoHomepage">
                  <v-list-tile>
                      <v-list-tile-title >Lelang</v-list-tile-title>
                  </v-list-tile>
              </v-list-item>
              <v-list-item @click.native="downloadApp">
                  <v-list-tile>
                      <v-list-tile-title >Download App</v-list-tile-title>
                  </v-list-tile>
              </v-list-item>
            </v-list>
        </v-sidebar>
        <v-content>
            <v-container fluid>
              <router-view></router-view>
            </v-container>
        </v-content>
    </main>
    <v-footer class="pink">
      <div class="text-xs-right">© BukaLelang 2017</div>
    </v-footer>
</v-app>
</template>

<script>
export default {
    data() {
        return {
            sidebar2: false,
            itemGroup: [{
                    header: 'Header'
                },
                {
                    title: 'Parent',
                    group: '/company',
                    items: [{
                            title: 'Child'
                        },
                        {
                            title: 'Child'
                        },
                        {
                            title: 'Child'
                        }
                    ]
                },
                {
                    title: 'Link'
                },
                {
                    title: 'Link'
                },
                {
                    divider: true
                },
                {
                    header: 'Another Header'
                },
                {
                    title: 'Link'
                }
            ]
        }
    },
    methods: {
      gotoHomepage() {
        this.$router.push('/')
      },
      gotoGuide() {
        this.$router.push('/panduan')
      },
      gotoAuction() {
        this.$router.push('/lelang')
      },
      downloadApp() {
        this.$router.push('/apps')
      }
    }
}
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main'
  @import './css/main.css'
</style>
