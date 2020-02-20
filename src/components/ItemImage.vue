<template>
    <img class="item-image" :src="image.href">
</template>

<script>
export default {
    name: 'ItemImage',
    props: {
        image: Object
    }
}
</script>

<style>
.item-image {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -100;
}
</style>