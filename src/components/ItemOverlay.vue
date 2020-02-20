<template>
    <div class="item-overlay">
        <ul class="carousel">
            <li class="carousel-item"
                v-for="(image, index) in images"
                v-bind:key="index">
                <img class="carousel-image" :src="image.href">
            </li>
        </ul>
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
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: black;
    opacity: 1;
    z-index: 99;
}
.carousel {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    overflow: hidden;
    height: 363px;
    width: 363px;
}
.carousel-item {
    height: 363px;
    width: 363px;
    margin: 0;
}


</style>