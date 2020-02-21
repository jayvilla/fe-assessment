<template>
    <div class='item-overlay'>
        <Carousel v-bind:images='images' @setOverlayToChild='setOverlay' />
    </div>
</template>

<script>
import Carousel from './Carousel.vue';
export default {
    name: 'ItemOverlay',
    props: {
        images: Array,
    },
    methods: {
        setOverlay: function() {
            this.$emit('setOverlay', false);
            console.log('message emitting from child');
        },
        setOverlayToChild: function() {
            this.setOverlay();
        }
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
    background-color: rgba(0, 0, 0, 0.90);
    height: 100%;
    width: 100%;
    z-index: 10;
}
span {
    color: #ffffff;
}
</style>