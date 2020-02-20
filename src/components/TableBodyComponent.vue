<template>
  <tbody v-if="typeof allEmployees !== 'undefined'">
    <tr v-for="(employee, index) in filteredEmployees()" :key="index">
      <td v-for="(prop, key) in employee" :key="key">{{ prop }}</td>
    </tr>
  </tbody>

  <tbody v-else>
    <tr v-for="(employee, index) in allEmployees" :key="index">
      <td v-for="(prop, key) in employee" :key="key">{{ prop }}</td>
    </tr>
  </tbody>
</template>

<script>
import store from "../store/store";

export default {
  name: "TableBodyComponent",
  data() {
    return {};
  },
  mounted() {
    store.dispatch("getInitialData");
  },
  computed: {
    allEmployees: function() {
      return store.state.allEmployees;
    },
    inputSearch: function() {
      return store.state.listViewFilters.inputSearch;
    }
  },
  methods: {
    filteredEmployees() {
      return this.allEmployees.filter(employee => {
        // declaring variable
        let foundSearch = false;
        let foundRange = false;

        // input text search filter
        if (this.inputSearch === "") {
          // user didn't searched for any text
          foundSearch = true;
        } else {
          // user searched for some text
          for (let prop in employee) {
            // iterates over all employee.properties and tests if it matches the text search
            let propertyStringified = String(employee[prop]);
            if (
              propertyStringified
                .toLowerCase()
                .match(this.inputSearch.toLowerCase().trim())
            ) {
              foundSearch = true;
              break;
            }
          }
        }

        // input range salary filter
        foundRange =
          parseInt(employee["employee_salary"]) <
            store.state.listViewFilters.secondRange &&
          parseInt(employee["employee_salary"]) >
            store.state.listViewFilters.firstRange;

        return foundSearch && foundRange;
      });
    }
  }
};
</script>

<style></style>
