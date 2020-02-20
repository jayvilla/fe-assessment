<template>
    <ul class="product-list">
        <ProductListItem
            v-for="(product, index) in products"
            v-bind:key="index"
            v-bind:product="product"/>
    </ul>
</template>

<script>
import ProductListItem from './ProductListItem.vue';
export default {
    name: 'ProductList',
    props: {
        products: Array
    },
    components: { ProductListItem }
}
</script>

<style scoped>
.product-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0;
}
</style>