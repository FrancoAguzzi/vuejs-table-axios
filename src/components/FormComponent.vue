<template>
  <form @submit.prevent="saveNewEmployee()" method="post" class="form">
    <h2 class="form__title">Create New Employee:</h2>
    <input class="form__input" type="text" v-model="data.employee_name" placeholder="Name" required />
    <input
      class="form__input"
      type="text"
      v-model="data.employee_salary"
      placeholder="Salary"
      required
    />
    <input class="form__input" type="text" v-model="data.employee_age" placeholder="Age" required />
    <button class="form__btn" type="submit">Submit</button>
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
  margin: 50px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.form__input {
  width: 100%;
  height: 50px;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px;
}

.form__title {
  margin-bottom: 30px;
}

.form__btn {
  border-radius: 5px;
  font-weight: bold;
  color: white;
  width: 100px;
  height: 40px;
  margin-top: 10px;
  border: none;
  background-color: rgb(25, 109, 219);
}

.form__btn:focus,
.form__btn:hover {
  background-color: rgba(25, 109, 219, 0.5);
}
</style>
