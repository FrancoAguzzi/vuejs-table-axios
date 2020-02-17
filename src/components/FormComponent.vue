<template>
  <form @submit.prevent="saveNewEmployee()" method="post" class="form">
    <input type="text" v-model="data.employee_name" placeholder="Name" required/>
    <input type="text" v-model="data.employee_salary" placeholder="Salary" required/>
    <input type="text" v-model="data.employee_age" placeholder="Age" required/>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import store from "../store/store";

export default {
  name: "FormComponent",
  data() {
    return {
      data: {
        employee_name: "",
        employee_salary: "",
        employee_age: ""
      }
    };
  },
  methods: {
    saveNewEmployee() {
      store.dispatch("post", {
          name: this.data.employee_name,
          salary: this.data.employee_salary,
          age: this.data.employee_age
      });
      this.data = {};
    }
  }
};
</script>

<style>
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.form input {
  width: 100%;
  height: 50px;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px;
}

.form button {
  border-radius: 5px;
  font-weight: bold;
  color: white;
  width: 100px;
  height: 40px;
  margin-top: 10px;
  border: none;
  background-color: rgb(25, 109, 219);
}

.form button:focus {
  background-color: rgba(25, 109, 219, 0.5);
}
</style>
