<template>
  <tbody v-if="typeof allEmployees !== 'undefined'">
    <tr v-for="(employee, index) in filteredEmployees" :key="index">
      <td v-for="(prop, key) in employee" :key="key">{{ prop }}</td>
    </tr>
  </tbody>

  <tbody v-else>
    <tr v-for="(employee, index) in allEmployees" :key="index">
      <td  v-for="(prop, key) in employee" :key="key">{{ prop }}</td>
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
    store.dispatch('getInitialData');
  },
  computed: {
    allEmployees: function() {
      return store.state.allEmployees;
    },
    inputSearch: function() {
      return store.state.listViewFilters.inputSearch;
    },
    filteredEmployees: function() {
      return this.allEmployees.filter(employee => {
        // declaring variable
        let foundSearch = false;

        // input text search
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
        return foundSearch;
      });
    }
  }
};
</script>

<style></style>
