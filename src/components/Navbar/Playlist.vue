<template>
    <ul class="container">
        <li class="item">
            <img src="../../assets/images/capa-album.jpg" alt="capa">
            <div class="content">
                <span>Skyfall</span>
                <span>Adelle</span>
            </div>
        </li>
        <li class="item">
            <img src="../../assets/images/capa-album.jpg" alt="capa">
            <div class="content">
                <span>Skyfall</span>
                <span>Adelle</span>
            </div>
        </li>
        <li class="item">
            <img src="../../assets/images/capa-album.jpg" alt="capa">
            <div class="content">
                <span>Skyfall</span>
                <span>Adelle</span>
            </div>
        </li>
        <li class="item">
            <img src="../../assets/images/capa-album.jpg" alt="capa">
            <div class="content">
                <span>Skyfall</span>
                <span>Adelle</span>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: "Playlist"
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.container {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
    background-color: $color-gradient-3;
    border-radius: 12px;
    height: 100vh;

    .item {
        display: flex;
        gap: 10px;
        align-items: center;
        padding: 10px;
        border-radius: 10px;
        transition: .2s;

        &:hover {
            background-color: $card-bg;
        }

        img {
            width: 100%;
            max-width: 65px;
            cursor: pointer;
        }

        .content {
            display: flex;
            flex-direction: column;
            color: $text-color;

            span:hover {
                cursor: pointer;
                transition: .2s;
                color: $text-color2;
            }

            span:nth-child(2) {
                font-size: 12px;
            }
        }
    }
}
</style>