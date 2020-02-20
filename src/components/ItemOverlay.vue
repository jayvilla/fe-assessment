<template>
    <div class="item-overlay">
        {{ images }}
    </div>
</template>

<script>
export default {
    name: 'ItemOverlay',
    props: {
        images: Array
    }
}
</script>

<style scoped>
.item-overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.90;
  z-index: 9999;
}
</style>