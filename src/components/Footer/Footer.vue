<template>
    <div class="footer">
        <MusicPlayed/>
        <Bar/>
        <Options/>
    </div>
</template>

<script>
    import MusicPlayed from './MusicPlayed.vue';
    import Bar from './Bar.vue';
    import Options from './Options.vue';

    export default {
        name: "Footer",
        components: {
            MusicPlayed, 
            Bar,
            Options
        }
    }
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
}

@media screen and (max-width: 940px) {
    .footer {
        padding: 0 15px;
    }
}

@media screen and (max-width: 550px) {
    .footer {
        justify-content: center;
    }
}
</style>