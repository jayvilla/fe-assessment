<template>
  <div id="app"> 
    <NavBar @changeView='setAppView' />
    <Home v-if='view === "home"' />
    <Products v-if='view === "products"' />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Home from './components/Home.vue';
import Products from './components/Products.vue';

export default {
  name: 'App',
  data: function() {
    return {
      view: 'products'
    }
  },
  methods: {
    setAppView: function(view) {
      this.view = view;
    }
  },
  components: {
    NavBar,
    Home,
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
