<template>
    <div class="footer">
        <div class="music-played">
            <img src="../assets/images/capa-album.jpg" alt="">
            <div class="music-content">
                <h3>Skyfall</h3>
                <span>Adelle</span>
            </div>
        </div>
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
        <div class="options">
            <ListMusicIcon/>
            <VolumeXIcon/>
            <Maximize2Icon/>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;

    .music-played {
        display: flex;

        gap: 10px;

        img {
            width: 70px;

        }

        .music-content {
            margin-top: 5px;

            h3 {
                color: $navbar-hover-text-color;
            }

            span {
                color: $navbar-text-color;
            }
        }
    }

    .bar {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        .icons {
            color: #fff;
            display: flex;
            gap: 30px;

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
            background-color: $navbar-text-color;
            margin: 0 10px;
            width: 300px;
        }
    }
    .options {
        display: flex;
        align-items: center;
        gap: 20px;
        color: #fff;
    }

}
</style>