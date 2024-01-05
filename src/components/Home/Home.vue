<template>
    <div class="container-home">
        <Arrows/>
        <section>
            <h1>Good morning</h1>

            <article class="grid">
                <CardMusic />
                <CardMusic />
                <CardMusic />
                <CardMusic />
                <CardMusic />
                <CardMusic />
            </article>
        </section>
        <section>
            <h2>Shows you might like</h2>

            <div class="card-like-container">
                <CardLikeMusic />
                <CardLikeMusic />
                <CardLikeMusic />
                <CardLikeMusic />
                <CardLikeMusic />
                <CardLikeMusic />
            </div>
        </section>
    </div>
</template>

<script>
    import CardMusic from "./CardMusic.vue";
    import CardLikeMusic from "./CardLikeMusic.vue";
    import Arrows from "./Arrows.vue";

    export default {
        components: {
            CardMusic,
            CardLikeMusic,
            Arrows
        }
    }
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.container-home {
    padding: 40px;

    h1 {
        color: #fff;
        font-size: 30px;
        margin: 20px 0;
    }

    .grid {
        display: grid;
        grid-template-columns: auto auto auto;

    }


    h2 {
        color: #fff;
        font-size: 20px;
        margin: 20px 0;
    }

    .card-like-container {
        display: grid;
        grid-template-columns: auto auto auto auto;
    }
}

@media screen and (max-width: 940px) {
    .container-home {
        .grid {
            grid-template-columns: auto auto ;
        }

        .card-like-container {
            grid-template-columns: auto auto auto;

        }
    }
}

@media screen and (max-width: 550px) {
    .container-home {
        .grid {
            grid-template-columns: auto;
        }

        .card-like-container {
            grid-template-columns: auto auto;

        }
    }
}

@media screen and (max-width: 425px) {
    .container-home {
        .card-like-container {
            grid-template-columns: auto auto;
        }
    }
}
</style>