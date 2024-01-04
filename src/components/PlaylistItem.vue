<template>
    <div class="playlist-container">
        <img src="../assets/images/capa-album.jpg" alt="capa do album SkyFall de Adele">
        <div>
            <span>Skyfall</span>
            <span>Música • Adele</span>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .playlist-container {
        display: flex;

        img {
            width: 60px;
            height: 60px;
        }

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 10px;
            height: 60px;
            margin-bottom: 20px;

            span {
                color: #ebebeb;

                &:last-child {
                    color: #8a8383;
                }
            }

        }
    }
</style>