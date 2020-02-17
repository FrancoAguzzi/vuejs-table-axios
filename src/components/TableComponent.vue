<template>
  <table v-if="!apiError" class="table table-striped table-dark">
    <TableHeadComponent />
    <TableBodyComponent />
  </table>

  <div v-else class="errored">Desculpe, ocorreu um erro na renderização dos dados.</div>
</template>

<script>
import TableBodyComponent from "./TableBodyComponent";
import TableHeadComponent from "./TableHeadComponent";
import store from "../store/store";

export default {
  name: "TableComponent",
  computed: {
    apiError: function() {
      return store.state.apiError;
    }
  },
  components: {
    TableBodyComponent,
    TableHeadComponent
  }
};
</script>

<style>
.table {
  width: 100%;
}
.errored {
  width: 100%;
  height: 50vh;
  margin-bottom: 50px;
  text-align: center;
  background-color: rgba(255, 0, 0, 0.808);
  color: white;
  font-size: 1.5em;
  line-height: 50vh;
  font-weight: bold;
}
</style>
