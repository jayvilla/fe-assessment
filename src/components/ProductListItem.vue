<template>
  <li class="list-item">
    <div
      class="item-bg-image"
      v-on:click="handleClick"
      v-bind:style="{ backgroundImage: `url(${product.hero.href})` }"
    >
      <p class="item-name">{{ formattedName(product.name) }}</p>
      <p class="item-price" v-if="product.price && product.price.selling">
        {{ "$" + product.price.selling }}
      </p>
      <p class="item-price" v-else-if="product.price && product.price.regular">
        {{ "$" + product.price.regular }}
      </p>
      <p class="item-price" v-else>Price Not Listed</p>
    </div>
    <ItemOverlay
      v-if="showOverlay"
      v-bind:images="product.images"
      @setOverlay="closeOverlay"
    />
  </li>
</template>

<script>
import ItemOverlay from "./ItemOverlay.vue";

export default {
  name: "ProductListItem",
  data: function() {
    return {
      showOverlay: false
    };
  },
  props: {
    product: Object
  },
  methods: {
    handleClick: function() {
      this.showOverlay = !this.showOverlay;
    },
    closeOverlay: function(bool) {
      this.showOverlay = bool;
    },
    formattedName: function(name) {
      let entities = {
        "&nbsp;": " ",
        "&lt;": "<",
        "&gt;": ">",
        "&amp;": "&",
        "&quot;": '"',
        "&apos;": "'"
      };
      if (name.indexOf("&quot;") > -1) {
        let oldNameRegEx = new RegExp("&quot;", "gi");
        name = name.replace(oldNameRegEx, '"');
      }
      for (let entity in entities) {
        let target = entities[entity];
        if (name.indexOf(target) > -1) {
          let oldNameRegex = new RegExp(entity, "gi");
          name = name.replace(oldNameRegex, entities[entity]);
        }
      }
      return name;
    }
  },
  components: { ItemOverlay }
};
</script>

<style scoped>
.list-item {
  display: block;
  position: relative;
  margin: 15px;
  height: 363px;
  width: 363px;
}
.item-name {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: rgba(255, 255, 255, 0.75);
  margin: 0;
  padding: 0 10px;
  height: 40px;
  color: #505050;
  font-weight: bold;
}
.item-price {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 2px;
  bottom: 30px;
  left: 10px;
  position: absolute;
  background-color: rgb(115, 115, 115);
  color: #fff;
  font-weight: bold;
}
.item-bg-image {
  height: 363px;
  width: 363px;
  cursor: pointer;
}
</style>
