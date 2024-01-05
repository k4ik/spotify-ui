<template>
    <div class="options">
        <ListMusicIcon/>
        <VolumeXIcon/>
        <Maximize2Icon/>
    </div>
</template>

<script>
    export default {
        name: "Options"
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";
    
    .options {
        display: flex;
        align-items: center;
        gap: 20px;
        color: #fff;

        &:hover {
            cursor: pointer;
        }
    }

    @media screen and (max-width: 550px) {
        .options {
            display: none;
        }
    }

</style>