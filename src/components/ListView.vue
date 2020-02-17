<template>
  <div class="list-view-container">
    <InputSearch />
    <TableComponent />
    <FormComponent />
  </div>
</template>

<script>
import FormComponent from "./FormComponent";
import TableComponent from "./TableComponent";
import InputSearch from "./InputSearch";

export default {
  name: "ListView",
  data() {
    return {};
  },
  components: {
    FormComponent,
    TableComponent,
    InputSearch
  }
};
</script>

<style>
.list-view-container {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}
</style>
