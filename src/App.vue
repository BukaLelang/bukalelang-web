<template>
<v-app top-toolbar>
    <header>
        <v-toolbar class="pink">
            <v-toolbar-side-icon @click.native.stop="sidebar2 = !sidebar2"></v-toolbar-side-icon>
            <v-toolbar-title class="hidden-sm-and-down">BukaLelang</v-toolbar-title>
            <v-text-field prepend-icon="search" label="Search..." hide-details single-line dark></v-text-field>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-toolbar-item>Home</v-toolbar-item>
                <v-toolbar-item>Contact</v-toolbar-item>
                <v-menu bottom left offset-y origin="top right" transition="v-slide-y-transition">
                    <v-btn icon dark slot="activator">
                        <v-icon>more_vert</v-icon>
                    </v-btn>
                    <v-list>
                        <v-list-item v-for="item in 4">
                            <v-list-tile>
                                <v-list-tile-title>fsafsafsadfa</v-list-tile-title>
                            </v-list-tile>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
        </v-toolbar>
    </header>
    <main>
        <v-sidebar class="pink darken-3" drawer v-model="sidebar2" height="100%">
            <v-list dense>
                <v-list-item v-for="(item,i) in 3" :key="i">
                    <v-list-tile>
                        <v-list-tile-title>fsafsafsadfa</v-list-tile-title>
                    </v-list-tile>
                </v-list-item>
            </v-list>
        </v-sidebar>
        <v-content>
            <v-container fluid>
               <v-row>
                <v-col xs4>
                </v-col>

                <v-col md4 xs12 >
                  <v-card v-for="i in 3"  class="ma-3 ">
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

                <div id="getting-started">
                    <p class="text-xs-center">Welcome to the Vuetify Webpack Template</p>
                    <h2 class="primary--text">Important Links</h2>
                    <div class="intro">
                        <v-list>
                            <v-list-item>
                                <v-list-tile href="http://vuetifyjs.com" target="_blank">
                                    <v-list-tile-title>
                                        Vuetify Documentation
                                    </v-list-tile-title>
                                </v-list-tile>
                            </v-list-item>
                            <v-list-item>
                                <v-list-tile href="https://github.com/vuetifyjs/webpack-ssr" target="_blank">
                                    <v-list-tile-title>
                                        Vuetify SSR Webpack
                                    </v-list-tile-title>
                                </v-list-tile>
                            </v-list-item>
                            <v-list-item>
                                <v-list-tile href="https://github.com/vuetifyjs/webpack" target="_blank">
                                    <v-list-tile-title>
                                        Vuetify Webpack
                                    </v-list-tile-title>
                                </v-list-tile>
                            </v-list-item>
                        </v-list>
                        <v-list>
                            <v-list-item>
                                <v-list-tile href="https://github.com/vuetifyjs/webpack-simple" target="_blank">
                                    <v-list-tile-title>
                                        Vuetify Webpack Simple
                                    </v-list-tile-title>
                                </v-list-tile>
                            </v-list-item>
                            <v-list-item>
                                <v-list-tile href="http://vuejs.org" target="_blank">
                                    <v-list-tile-title>
                                        Vue Documentation
                                    </v-list-tile-title>
                                </v-list-tile>
                            </v-list-item>
                            <v-list-item>
                                <v-list-tile href="https://github.com/vuejs/awesome-vue" target="_blank">
                                    <v-list-tile-title>
                                        Vue Awesome
                                    </v-list-tile-title>
                                </v-list-tile>
                            </v-list-item>
                        </v-list>
                    </div>
                </div>
            </v-container>
        </v-content>
    </main>
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
    }
}
</script>

<style lang="stylus">
  @import '../node_modules/vuetify/src/stylus/main'
  @import './css/main.css'
</style>
