<template>
    <nav class="navbar">
        <div class="container-navbar">
            <div class="home-icons">
                <HomeIcon />
                <span>Início</span>
            </div>
            <div class="home-icons">
                <SearchIcon />
                <span>Buscar</span>
            </div>
        </div>
        <div class="container-navbar">
            <div class="container-library">
                <div class="home-icons">
                    <LibraryIcon />
                    <span>Sua Biblioteca</span>
                </div>
            </div>
            <div class="container-playlist">
                <PlaylistItem />
                <PlaylistItem />
                <PlaylistItem />
                <PlaylistItem />
            </div>
        </div>
    </nav>
</template>
  
<script>
    import { defineComponent } from "vue";
    import { Home, Search, Library } from 'lucide-vue-next';
    import PlaylistItem from "./PlaylistItem.vue";

    export default defineComponent({
        components: {
            HomeIcon: Home,
            SearchIcon: Search,
            LibraryIcon: Library,
            PlaylistItem
        }
    }) 
</script>

<style lang="scss" scoped>
    .navbar {
        width: 20%;
        height: 85vh;
        background-color: black;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;

        .container-navbar {
            background-color: rgb(22, 22, 22);
            border-radius: 15px;
            display: flex;
            flex-direction: column;
            padding: 20px;
            .home-icons {
                display: flex;
                align-items: center;
                gap: 10px;
                margin: 10px 0;
                color: #ebebeb;
                font-weight: 500;
            }
        }
    }
</style>