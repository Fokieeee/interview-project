<template>
  <v-col cols="12" md="4">
    <v-select
      v-model="countryVariant"
      :items="filterTypes.countries"
      clearable
      label="Filter by country"
    ></v-select>

    <v-select
      v-model="scoreVariant"
      :items="filterTypes.scores"
      clearable
      label="Filter by score"
    ></v-select>
  </v-col>
</template>

<script>
import { mapState, mapMutations } from "vuex"

export default {
  name: "Filters",

  computed: {
    ...mapState(["filterTypes", "selectedCountry", "selectedScore"]),
    countryVariant: {
      get() {
        return this.selectedCountry
      },
      set(country) {
        this.setSelectedCountry(country)
      },
    },
    scoreVariant: {
      get() {
        return this.selectedScore
      },
      set(score) {
        this.setSelectedScore(score)
      },
    },
  },
  methods: {
    ...mapMutations({
      setSelectedCountry: "SET_SELECTED_COUNTRY",
      setSelectedScore: "SET_SELECTED_SCORE",
    }),
  },
}
</script>
