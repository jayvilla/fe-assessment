<template>
  <div class="products">
    <ProductList v-bind:products="groups" />
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";
import productData from "../../data/products.json";
/* List of keys in products data
    id
    name
    categoryType
    groups
    totalPages
    categories
*/

/*  List of keys in product object:
    id
    name
    links
    price
    thumbnail
    hero
    images
    swatches
    messages
    flags
    reviews
*/

export default {
  name: "Products",
  data: function() {
    return {
      id: "",
      name: "",
      categoryType: "",
      groups: [],
      totalPages: null,
      categories: []
    };
  },
  created: function() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts: function() {
      for (var key in productData) {
        this[key] = productData[key];
      }
    }
  },
  components: { ProductList }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
