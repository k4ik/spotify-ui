<template>
    <div class="arrows">
        <div class="arrow-div">
            <ChevronLeftIcon />
        </div>
        <div class="arrow-div">
            <ChevronRightIcon />
        </div>
    </div>
</template>

<script>
    export default {
        name: "Arrows"
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";

    .arrows {
        display: flex;
        align-items: center;
        gap: 20px;

        .arrow-div {
            background: $color-gradient-5;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $arrow-color;

            &:hover {
                cursor: pointer;
            }
        }
    }

</style>