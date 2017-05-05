<template>
<v-app top-toolbar>
    <header>
        <v-toolbar class="pink">
            <v-toolbar-side-icon @click.native.stop="sidebar2 = !sidebar2"></v-toolbar-side-icon>
            <v-toolbar-title class="hidden-sm-and-down">BukaLelang</v-toolbar-title>
            <v-text-field prepend-icon="search" label="Search..." hide-details single-line dark></v-text-field>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-toolbar-item><router-link to="/">Home</router-link></v-toolbar-item>
                <v-toolbar-item><router-link to="/shop">Shop</router-link></v-toolbar-item>
                <v-menu bottom left offset-y origin="top right" transition="v-slide-y-transition">
                    <v-btn icon dark slot="activator">
                        <v-icon>more_vert</v-icon>
                    </v-btn>
                    <v-list>
                        <v-list-item >
                            <v-list-tile>
                                <v-list-tile-title>Login</v-list-tile-title>
                            </v-list-tile>
                        </v-list-item>
                        <v-list-item >
                            <v-list-tile>
                                <v-list-tile-title>Register</v-list-tile-title>
                            </v-list-tile>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
        </v-toolbar>
    </header>
    <main>
        <v-sidebar class="pink darken-1" drawer v-model="sidebar2" height="100%">
            <v-list dense>
              <v-list-item >
                  <v-list-tile>
                      <v-list-tile-title>Login</v-list-tile-title>
                  </v-list-tile>
              </v-list-item>
              <v-list-item >
                  <v-list-tile>
                      <v-list-tile-title>Register</v-list-tile-title>
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
