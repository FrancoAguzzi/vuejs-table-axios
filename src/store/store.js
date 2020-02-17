import Vuex from "vuex";
import Vue from "vue";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // = data
    allEmployees: [],
    apiError: false,
    listViewFilters: {
      inputSearch: ""
    }
  },
  mutations: {
    // update state
    setInputSearchValue(state, payload) {
      state.listViewFilters.inputSearch = payload.searchValue;
    },
    setInitialEmployeesData(state, payload) {
      state.allEmployees = payload;
    },
    setNewEmployeesData(state, payload) {
      state.allEmployees.push(payload);
      console.log(state.allEmployees);
    }
  },
  actions: {
    getInitialData(context) {
      axios
        .get("http://dummy.restapiexample.com/api/v1/employees")
        .then(response => {
          context.commit("setInitialEmployeesData", response.data.data);
        })
        .catch(error => {
          this.state.apiError = true;
          console.log(error);
        });
    },
    post(context, payload) {
      axios
        .post("http://dummy.restapiexample.com/api/v1/create", payload)
        .then(response => {
          if (response.data.status === "success") {
            console.log(response);
            context.commit("setNewEmployeesData", {
              id: response.data.data.id,
              employee_name: payload.name,
              employee_salary: payload.salary,
              employee_age: payload.age,
              profile_image: ""
            });
          }
        })
        .catch(error => {
          context.apiError = true;
          console.log(error);
        });
    }
  }
});
