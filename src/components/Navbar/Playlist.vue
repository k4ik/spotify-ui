<template>
    <div class="playlists">
        <ul>
            <li>My Playlist #1</li>
            <li>My Playlist #2</li>
            <li>My Playlist #3</li>
            <li>My Playlist #4</li>
            <li>My Playlist #5</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Playlist"
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";

    .playlists {
        ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 10px;

            li{
                &:hover {
                    cursor: pointer;
                    transition: .2s;
                    color: $text-color2;
                }
            }
        }
    }
</style>