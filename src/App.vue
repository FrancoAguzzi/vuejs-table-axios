<template>
  <div id="app">
    <h1>Employees Table</h1>
    <ListView />
  </div>
</template>

<script>
import ListView from "./components/ListView";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    ListView
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-weight: bold;
  margin-top: 80px;
}
</style>
