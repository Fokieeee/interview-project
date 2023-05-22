import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    filterTypes: {
      countries: ["russia", "usa"],
      scores: ["> 20", "< 10"],
    },
    selectedCountry: undefined,
    selectedScore: undefined,
    users: [
      {
        id: "1",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        title: "Brunch this weekend?",
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        country: "usa",
        score: 20,
        address: "123 Main St, Anytown",
      },
      {
        id: "2",
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        country: "russia",
        score: 30,
        address: "789 Oak Ave, Metro City",
      },
      {
        id: "3",
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        title: "Oui oui",
        subtitle:
          '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        country: "russia",
        score: 10,
        address: "456 Elm St, Springfield",
      },
      {
        id: "4",
        avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        title: "Birthday gift",
        subtitle:
          '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        country: "france",
        score: 5,
        address: "987 Maple Ln, Smallville",
      },
      {
        id: "5",
        avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
        title: "Recipe to try",
        subtitle:
          '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        country: "china",
        score: 15,
        address: "654 Pine Rd, Rivertown",
      },
    ],
    isPreloader: false,
  },
  getters: {
    filteredUserList(state) {
      let filteredUsers = state.users

      //filter by Country
      if (state.selectedCountry) {
        filteredUsers = filteredUsers.filter(
          (item) => item.country === state.selectedCountry
        )
      }

      //filter by Score > 20
      if (state.selectedScore === "> 20") {
        filteredUsers = filteredUsers.filter((item) => item.score > 20)
      }

      //filter by Score < 10
      if (state.selectedScore === "< 10") {
        filteredUsers = filteredUsers.filter((item) => item.score < 10)
      }
      return filteredUsers
    },
  },
  mutations: {
    SET_SELECTED_COUNTRY(state, payload) {
      state.selectedCountry = payload
    },
    SET_SELECTED_SCORE(state, payload) {
      state.selectedScore = payload
    },
    SET_USERS(state, users) {
      console.log("set_users", users)
    },
    SET_PRELOADER(state) {
      state.isPreloader = !state.isPreloader
    },
  },
  actions: {
    //пример загрузки с апи 
    //(в итоге в мутации SET_USERS этот список просто выводится в логи, а пользуюсь я моковым стейтом)
    async fetchData({ commit }) {
      try {
        commit("SET_PRELOADER")

        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await res.json()
        commit("SET_USERS", data)

        commit("SET_PRELOADER")
      } catch (error) {
        console.log(error)
      }
    },
  },
})
