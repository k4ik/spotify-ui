<template>
    <div class="music-played">
        <img src="../../assets/images/capa-album.jpg" alt="">
        <div class="music-content">
            <h3>Skyfall</h3>
            <span>Adelle</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MusicPlayed"
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";

    .music-played {
        display: flex;

        gap: 10px;

        img {
            width: 70px;

            &:hover {
                cursor: pointer;
            }
        }

        .music-content {
            margin-top: 5px;

            h3 {
                color: $text-color2;
            }

            span {
                color: $text-color;
            }
        }
    }

    @media screen and (max-width: 940px) {
        .music-played {
            img {
                width: 50px;
            }
        }
    }

    @media screen and (max-width: 550px) {
        .music-played {
            display: none;
        }
    }
</style>