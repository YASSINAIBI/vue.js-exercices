<template>
  <div>
    <h1>Get Github Repositories With Axios Client</h1>

    <ul>
        <input type="text" class="input m-3 p-3" v-model="name">

        <button @click.prevent="getRepos" class="btn btn-success">Get Repos</button>

        <div v-for="repo in repos" v-bind:key="repo.id">

            <div class="card container mb-5">
                <div class="card-body">
                    <h2>name : {{ repo.name }}</h2>
                    <h3> ID : {{ repo.id }} </h3>
                    <p> Created In : {{ repo.created_at }} </p>
                    <a :href="repo.url"> API URL : {{ repo.url }} </a>
                </div>
            </div>
        </div>
    </ul>
  </div>
</template>

<script>
window.axios = require("axios");

export default {
  data: function() {
    return {
      name: null,
      repos: null,
    };
  },

  methods: {
    getRepos: function() {
      axios
        .get(`https://api.github.com/users/${this.name}/repos`)
        .then((response) => {
          this.repos = response.data;
          console.log(this.repos);
        }).catch((error) => {
            console.log(error);
            this.repos = alert("no repos find")
        }).finally(() => alert("data loded"));
    },
  },

//   mounted: function(){

//   },

  name: "tuto5",
};
</script>

<style lang="scss" scoped></style>
