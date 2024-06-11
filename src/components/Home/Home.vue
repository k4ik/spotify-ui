<template>
    <div class="container-home">
        <div class="header">
            <Arrows />
            <Actions />
        </div>
        <section>
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
            </div>
        </section>
        <section>
            <h2>Recently played</h2>

            <div class="card-like-container">
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
import Actions from "./Actions.vue";

export default {
    components: {
        CardMusic,
        CardLikeMusic,
        Arrows,
        Actions
    }
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.container-home {
    padding: 40px;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        color: #fff;
        font-size: 30px;
        margin: 20px 0;
    }

    .grid,
    .card-like-container {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
    }

    h2 {
        color: #fff;
        font-size: 20px;
        margin: 20px 0;
    }
}
</style>