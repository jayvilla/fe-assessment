<template>
  <div id="app"> 
    <NavBar />
    <Products />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Products from './components/Products.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Products
  }
}
</script>

<style>
html, body, #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 12px;
  margin: 0;
}
</style>
