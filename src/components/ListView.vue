<template>
  <div class="list-view-container">
    <InputSearch />
    <RangeSliderComponent />
    <TableComponent />
    <FormComponent />
  </div>
</template>

<script>
import FormComponent from "./FormComponent";
import TableComponent from "./TableComponent";
import InputSearch from "./InputSearch";
import RangeSliderComponent from "./RangeSliderComponent";

export default {
  name: "ListView",
  data() {
    return {};
  },
  components: {
    FormComponent,
    TableComponent,
    InputSearch,
    RangeSliderComponent
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
