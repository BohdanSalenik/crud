<template>
  <div>
    <form @submit.prevent="loadUsers">
      <input type="text" v-model="url" placeholder="Paste json" />
      <button type="submit" class="btn btn-success">
        Load users
      </button>
    </form>
    <form @submit.prevent="onSubmit">
      <input v-model.lazy="name" type="text" placeholder="Name" />
      <input v-model.lazy="surname" type="text" placeholder="Surname" />
      <input v-model.lazy="phone" type="text" placeholder="Phone" />
      <input v-model.lazy="email" type="text" placeholder="Email" />
      <button type="submit" class="btn btn-primary">
        Add user
      </button>
    </form>
    <Users />
  </div>
</template>

<script>
import Users from "@/components/Users";
export default {
  components: {
    Users
  },
  data() {
    return {
      name: "",
      surname: "",
      phone: "",
      email: "",
      url: ""
    };
  },
  methods: {
    loadUsers() {
      const prepUsers = JSON.parse(this.url).map(user => ({
              ...user,
              name: user.name.split(" ")[0],
              surname: user.name.split(" ")[1]
            }))
      this.$store.state.users = prepUsers;
      this.url = "";
    },
    onSubmit() {
      const newUser = {
        id: Date.now(),
        name: this.name,
        surname: this.surname,
        phone: this.phone,
        email: this.email
      };
      this.$store.state.users.push(newUser);
      this.clearFields();
    },
    clearFields() {
      this.name = "";
      this.surname = "";
      this.phone = "";
      this.email = "";
    }
  }
};
</script>

<style scoped>
form {
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-bottom: 25px;

  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
}
input {
  width: 150px;
  margin-bottom: 5px;
}
</style>
