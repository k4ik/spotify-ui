<template>
    <div class="bar">
        <ul class="icons">
            <li class="item">
                <Shuffle size="18" />
            </li>
            <li class="item">
                <SkipBack size="18" />
            </li>
            <li class="item">
                <Play size="18" fill="black" />
            </li>
            <li class="item">
                <SkipForward size="18" />
            </li>
            <li class="item">
                <Repeat size="18" />
            </li>
        </ul>
        <ul class="music-bar">
            <li class="minutes">00:00</li>
            <li class="bar-span"></li>
            <li class="minutes">02:45</li>
        </ul>
    </div>
</template>

<script>
import { Shuffle, SkipBack, Play, SkipForward, Repeat } from "lucide-vue-next";
export default {
    components: {
        Shuffle, SkipBack, Play, SkipForward, Repeat
    },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.bar {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .icons {
        display: flex;
        align-items: center;
        gap: 30px;
        list-style: none;

        .item {
            color: $text-color;

            &:hover {
                transition: all .1s;
                color: $text-color2;
            }

            &:nth-child(3) {
                background-color: #ffffff;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #000;
                padding: 5px;

                &:hover {
                    transition: all .1s;
                    transform: scale(1.1);
                }
            }
        }


    }

    .music-bar {
        display: flex;
        align-items: center;
        list-style: none;

        .minutes {
            color: $text-color;
            font-size: 12px;
        }

        .bar-span {
            height: 4px;
            background-color: $text-color;
            margin: 0 10px;
            width: 300px;
        }
    }
}
</style>