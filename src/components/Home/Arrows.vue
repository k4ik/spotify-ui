<template>
    <ul class="arrows">
        <li class="arrow"><ChevronLeft size="18" /></li>
        <li class="arrow"><ChevronRight size="18" /></li>
    </ul>
</template>

<script>
import { ChevronLeft, ChevronRight  } from "lucide-vue-next";
    export default {
        components: {
            ChevronLeft, ChevronRight,
        },
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";

    .arrows {
        display: flex;
        align-items: center;
        gap: 20px;
        list-style: none;
        margin-bottom: 20px;

        .arrow {
            background: $color-gradient-5;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $arrow-color;

            &:hover {
                transition: .3s;
                cursor: pointer;
                color: $text-color2;
                background-color: $card-bg;
            }
        }
    }

</style>