<script>
import UserComponent from './components/UserComponent.vue'

export default {
  components: {
    UserComponent
  },
  data() {
    return {
      searchInput: '',
      hasSearched: false,
      noResults: false,
      users: []
    }
  },
  methods: {
    onInputClicked() {
      this.hasSearched = false
      this.noResults = false
    },
    async search() {
      this.hasSearched = true
      this.users = []
      if (this.isSearchInputEmpty())
        return

      fetch(`http://localhost:5214/Users?searchTerm=${this.searchInput}`)
        .then(async response => {
          let users = await response.json()
          users.forEach(user => this.users.push({ id: user.id, firstName: user.firstName, lastName: user.lastName, email: user.email, gender: user.gender }))
          this.noResults = this.users.length == 0
        })
        .catch(error => this.searchResults = error);

    },
    shouldShowEmptyInputMessage() {
      return this.hasSearched && this.isSearchInputEmpty()
    },
    shouldShowNoResultsMessage() {
      return this.hasSearched && !this.isSearchInputEmpty() && this.users.length == 0
    },
    isSearchInputEmpty() {
      return this.searchInput.trim() === ''
    }
  }
}
</script>

<template>
  <div>
    <input class="SearchBox" @focus="onInputClicked" v-model="searchInput" placeholder="Search Users.."/>
    <button class="SearchButton" @click="search">Search</button>
    <p>{{ shouldShowEmptyInputMessage() ? 'Search cannot be empty. Please provide valid input.' : '' }}</p>
    <p v-if="noResults">No results found.</p>
  </div>
  <ul>
    <UserComponent v-for="user in users" :key="user.id" :id="user.id" :firstName="user.firstName" :lastName="user.lastName" :email="user.email" :gender="user.gender"/>
  </ul>
</template>

<style>
* {
  background-color: rgb(46, 47, 61);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  text-align: center;
}

.SearchBox {
  color: white;
  text-align: left;
  margin: 2.5%;
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  font-size: large;
  padding: 8px;
  -webkit-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.25);
}

.SearchButton {
  color: white;
  margin: 2.5%;
  border: 1px solid;
  border-color: rgba(255, 255, 255, 0.5);
  border-radius: 4px;
  font-size: large;
  padding: 8px;
  -webkit-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.25);
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.25);
}

p {
  color: white;
  font-size: large;
  text-align: center;
}
</style>