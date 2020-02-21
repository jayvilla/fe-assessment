<template>
    <div class='carousel'>
        <div class="img-wrapper">
            <span class='exit' @click='setOverLayToChild'>X</span>
            <img :src='currentImage' alt=''>
            <span @click='prevImage' class='prev'>&#10094;</span>
            <span @click='nextImage' class='next'>&#10095;</span>
            <div class='indicator'>
                <div class='bullet' :class='activeImage === index ? "active" : ""' v-for='(image, index) in images' v-bind:key='index'></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    data: function() {
        return {
            activeImage: 0
        }
    },
    props: {
        images: Array
    },
    computed: {
        currentImage: function() {
            return this.images[this.activeImage].href
        }
    },
    methods: {
        nextImage: function() {
            let active = this.activeImage + 1;
            if (active >= this.images.length) {
                active = 0;
            }
            this.activateImage(active);
        },
        prevImage: function() {
            let active = this.activeImage - 1;
            if (active < 0) {
                active = this.images.length - 1;
            }
            this.activateImage(active);
        },
        activateImage: function(imageIndex) {
            this.activeImage = imageIndex;
        },
        setOverLayToChild: function() {
            this.$emit('setOverlayToChild', false);
            ('emitting message from child child');
        }
    }
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
.img-wrapper {
    position: relative;
    height: 363px;
    width: 363px;
}
.prev, .next {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    z-index: 11;
    font-size: 35px;
    height: 45px;
    width: 45px;
    color: #505050;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.75);
}
.prev {
    left: 0;
}
.next {
    right: 0;
}
.exit {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 11;
    color: #505050;
    font-size: 25px;
    font-weight: bold;
    background-color: transparent;
}
.indicator {
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 11;
    height: 35px;
    width: 363px;
    background-color: rgba(150, 150, 150, 0.75);
}
.bullet {
    margin: 5px;
    height: 5px;
    width: 5px;
    border-radius: 5px;
    border: 1px solid #ffffff;
}
.active {
    background-color: #ffffff;
}
</style>