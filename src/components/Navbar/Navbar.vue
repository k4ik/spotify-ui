<template>
    <div class="navbar-container">
        <Menu/>
        <div id="row"></div>
        <Playlist/>
    </div>
</template>

<script>
    import Menu from "./Menu.vue";
    import Playlist from "./Playlist.vue";

    export default {
        name: 'Navbar',
        components: {
            Menu,
            Playlist
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";

    .navbar-container {
        color: $text-color;
        padding: 30px;

        #row {
            height: 1px;
            background-color: $row-color;
            width: 100%;
            margin: 40px auto;
        }
    }
</style>