<template>
    <img src="../../assets/images/spotify-logo.png" alt="spotify logo">
    <div class="icons-container">
        <div class="icons-div">
            <HomeIcon />
            <span>Home</span>
        </div>
        <div class="icons-div">
            <SearchIcon />
            <span>Search</span>
        </div>
        <div class="icons-div">
            <LibraryIcon />
            <span>Your Library</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Menu"
}
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";

    img {
        margin-bottom: 30px;
    }

    .icons-container {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .icons-div {
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 5px;

            &:hover {
                cursor: pointer;
                transition: .2s;
                background-color: $hover-bg;
                border-radius: 5px;
            }
        }
    }
</style>