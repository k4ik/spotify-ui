<template>
    <div class="card">
        <img src="../../assets/images/capa-album.jpg" alt="">
        <div class="card-content">
            <span>Skyfall</span>
            <button>
                <PlayIcon />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardMusic"
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";


.card {
    display: flex;
    max-width: 300px;
    margin-bottom: 30px;


    img {
        height: 75px;
        width: 100px;

        &:hover {
            cursor: pointer;
        }
    }

    .card-content {
        height: 75px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: $hover-bg;
        padding: 0 20px;
        color: $text-color2;

        &:hover {
            background-color: $card-bg;
            transition: .5s;
            cursor: pointer;

            button {
                transition: .5s;
                visibility: visible;
                cursor: pointer;
            }
        }

        button {
            border: none;
            background-color: $button-bg;
            color: $text-color;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            visibility: hidden;
        }
    }
}

@media screen and (max-width: 940px){
    .card {
        max-width: 250px;
    }
}

@media screen and (max-width: 550px){
    .card {
        max-width: 400px;
    }
}



</style>