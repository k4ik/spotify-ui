<template>
    <div class="music-played">
        <img src="../../assets/images/capa-album.jpg" alt="capa">
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
    align-items: center;
    gap: 10px;

    img {
        width: 60px;

        &:hover {
            cursor: pointer;
        }
    }

    .music-content {
        h3 {
            color: $text-color2;
            font-size: 14px;

            &:hover {
                text-decoration: underline;
            }
        }

        span {
            color: $text-color;
            font-size: 12px;

            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>