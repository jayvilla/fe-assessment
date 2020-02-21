<template>
    <header class="app-header">
        <ul class="app-nav">
            <li class="nav-item">
                <a name='home' @click='changeView'>Home</a>
            </li>
            <li class="nav-item">
                <a name='products' @click='changeView'>Products</a>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    name: 'NavBar',
    methods: {
        changeView: function(e) {
            this.$emit('changeView', e.target.name)
        }
    }
}
</script>

<style scoped>
.app-header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    background: #f4f4f4;
    padding: 0 100px;
    
}
.app-nav {
    display: flex;
    flex-direction: row;
    list-style-type: none;
}
.nav-item {
    padding: 5px 15px;
}
.nav-item a {
    cursor: pointer;
}
a:hover {
    font-weight: bold;
}
</style>