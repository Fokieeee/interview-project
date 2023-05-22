<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row align="center" justify="center" class="ma-4">

          <v-col cols="12">
            <v-img
              :src="require('./assets/logo.svg')"
              class="my-3"
              contain
              height="200"
            />
          </v-col>

          <Filters />
          <UserList />
        </v-row>
      </v-container>
    </v-main>
    <v-footer app v-bind="localAttrs">
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Footer from "./components/Footer"
import Filters from "./components/Filters"
import UserList from "./components/UserList"

export default {
  name: "App",

  components: {
    Footer,
    UserList,
    Filters,
  },

  computed: {
    localAttrs() {
      const attrs = {}

      attrs.absolute = true
      attrs.fixed = false

      return attrs
    },
  },
}
</script>
