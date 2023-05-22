<template>
  <v-col cols="12" md="4">

    <v-card max-width="450" class="mx-auto" v-if="!isPreloader">
      <v-list three-line>
        <v-subheader>
          <p>List</p>
        </v-subheader>

        <v-slide-x-transition group>
          <div v-for="item in filteredUserList" :key="item.id">
            <v-list-item>

              <v-list-item-avatar class="avatar" @click="openAddress(item.id)">
                <v-img :src="item.avatar"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title v-html="item.title" />
                <v-list-item-subtitle v-html="item.subtitle" />
                <v-list-item-subtitle v-if="isAddressOpen(item.id)" v-html="item.address"/>
              </v-list-item-content>

            </v-list-item>

            <v-divider inset :key="item.id" />
          </div>
        </v-slide-x-transition>
      </v-list>
    </v-card>

    <!-- Preloader -->
    <v-layout
      align-center
      justify-center
      column
      height="200"
      max-width="450"
      v-else
    >
      <v-flex row align-center>
        <v-progress-circular indeterminate :size="50" color="primary" />
      </v-flex>
    </v-layout>
  </v-col>
</template>

<script>
import { mapActions, mapState } from "vuex"
import { mapGetters } from "vuex"

export default {
  name: "UserList",
  data: () => ({
    addressId: undefined,
  }),
  computed: {
    ...mapState(["isPreloader"]),
    ...mapGetters(["filteredUserList"]),
    isAddressOpen() {
      return (id) =>  this.addressId === id;
    },
  },
  methods: {
    ...mapActions(["fetchData"]),
    openAddress(id) {
      if ( id === this.addressId) {
        this.addressId = ''
      } else {
        this.addressId = id
      }
    }
  },
  async mounted() {
    this.fetchData()
  },
}
</script>

<style lang="scss" scoped>
.avatar {
  cursor: pointer;
}
</style>
