<template>
    <header class="app-header">
        <ul class="app-nav">
            <li class="nav-item">
                <a>Home</a>
            </li>
            <li class="nav-item">
                <a>Products</a>
            </li>
        </ul>
    </header>
</template>

<script>
export default {
    name: 'NavBar'
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
</style>