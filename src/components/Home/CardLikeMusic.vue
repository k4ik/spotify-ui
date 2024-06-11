<template>
    <div class="card">
        <img src="../../assets/images/capa-album.jpg" alt="capa">
        <div class="card-content">
            <h3>Skyfall</h3>
            <span>Adelle</span>
            <button>
                <Play fill="black" />
            </button>
        </div>
    </div>
</template>

<script>
import { Play } from "lucide-vue-next";

export default {
    components: {
        Play,
    },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.card {
    max-width: 170px;
    width: 100%;
    padding: 10px;
    margin-bottom: 30px;
    position: relative;
    border-radius: 12px;

    img {
        width: 100%;
        border-radius: 10px;

        &:hover {
            cursor: pointer;
        }
    }

    button {
        position: absolute;
        border: none;
        background-color: $button-bg;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: hidden;
        right: 10%;
        top: 50%;
    }

    &:hover {
        background-color: $color-gradient-1;
        transition: .5s;
        cursor: pointer;

        button {
            transition: .5s;
            visibility: visible;
            cursor: pointer;
        }
    }

    .card-content {
        padding: 10px;
        h3 {
            color: $text-color2;
            font-size: 14px;
        }

        span {
            color: $text-color;
            font-size: 12px;
        }




    }
}
</style>