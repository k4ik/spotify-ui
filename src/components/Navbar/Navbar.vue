<template>
    <div class="container">
        <Menu />
        <Playlist />
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

.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
}
</style>