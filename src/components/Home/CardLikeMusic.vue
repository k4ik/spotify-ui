<template>
    <div class="card-like-musics">
        <img src="../../assets/images/capa-album.jpg" alt="">
        <div class="card-like-musics-content">
            <h3>Skyfall</h3>
            <span>Adelle</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardLikeMusic"
}
</script>

<style lang="scss" scoped>

    @import "../../assets/scss/variables";

    .card-like-musics {
        background-color: $hover-bg;
        max-width: 150px;
        padding: 10px;
        margin-bottom: 30px;

        img {
            width: 100%;
            border-radius: 10px;

            &:hover {
                cursor: pointer;
            }
        }

        .card-like-musics-content {
            h3 {
                color: $text-color2;    
            }

            span {
                color: $text-color;
            }
        }
    }

    @media screen and (max-width: 425px) {
        .card-like-musics {
            max-width: 120px;
        }
    }
</style>