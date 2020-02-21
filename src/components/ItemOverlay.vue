<template>
    <div class='item-overlay'>
        <Carousel v-bind:images='images' />
    </div>
</template>

<script>
import Carousel from './Carousel.vue';
export default {
    name: 'ItemOverlay',
    props: {
        images: Array
    },
    components: { Carousel }
}
</script>

<style scoped>
.item-overlay {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    height: 100%;
    width: 100%;
    z-index: 10;
}
</style>