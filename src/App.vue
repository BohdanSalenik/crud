<template>
  <div id="app" class="container ">
    <h1>Crud App</h1>
    <ul>
      <li>
        <router-link 
          class="active btn btn-primary" 
          to="/crud/"
        >
          Users page
        </router-link>
      </li>
      <li>
        <router-link 
          class="active btn btn-primary" 
          to="/crud/users"
        >
          Add users
        </router-link
        >
      </li>
    </ul>
    <hr />
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    const persist = JSON.parse(localStorage.getItem("users"));
    if (persist.length > 0) {
      this.$store.state.users = JSON.parse(localStorage.getItem("users"));
    } else {
      fetch("https://jsonplaceholder.typicode.com/users/")
        .then(response => response.json())
        .then(
          json =>
            (this.$store.state.users = json.map(user => ({
              ...user,
              name: user.name.split(" ")[0],
              surname: user.name.split(" ")[1]
            })))
        );
    }
  }
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-around;
  list-style: none;
}

li {
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.active {
  text-decoration: none;
  display: block;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0 auto;
}
</style>
