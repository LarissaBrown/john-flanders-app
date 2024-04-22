<template>
  <div id="app">
    <NavView />
    <router-view />
  </div>
</template>
<script>
import NavView from './components/partials/NavView.vue';
export default {
  name: 'app',
  components: {
    NavView,
  },
};
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>