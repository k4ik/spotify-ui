<template>
    <div class="bar">
        <div class="icons">
            <ShuffleIcon />
            <SkipBackIcon />
            <button>
                <PlayIcon />
            </button>
            <SkipForwardIcon />
            <RepeatIcon />
        </div>
        <div class="music-bar">
            <p class="minutes">00:00</p>
            <p class="bar-span"></p>
            <p class="minutes">02:45</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Bar"
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
            color: #fff;
            display: flex;
            gap: 30px;

            &:hover {
                cursor: pointer;
            }

            button {
                border: none;
                background-color: #ffffff;
                color: #000;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                font-size: 14px;
                display: flex;
                justify-content: center;
                align-items: center;

                &:hover {
                    cursor: pointer;
                }
            }
        }

        .music-bar {
            display: flex;
            align-items: center;
        }

        .minutes {
            color: #fff;
        }

        .bar-span {
            height: 4px;
            background-color: $text-color;
            margin: 0 10px;
            width: 300px;
        }
    }

    @media screen and (max-width: 940px) {
        .bar {
            .bar-span {
                width: 150px;
            }
        }
    }

    @media screen and (max-width: 550px) {
        .bar {
            .icons {
                gap: 10px;
                font-size: 10px;
            }
        }
    }
</style>