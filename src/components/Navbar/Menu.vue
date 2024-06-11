<template>
    <ul class="container">
        <li class="item">
            <Home />
            <span>Home</span>
        </li>
        <li class="item">
            <Search />
            <span>Search</span>
        </li>
        <li class="item">
            <Library />
            <span>Your Library</span>
        </li>
    </ul>
</template>

<script>
import { Home, Search, Library } from "lucide-vue-next";

export default {
    components: {
        Home, Search, Library
    },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    list-style: none;
    background-color: $color-gradient-3;
    color: $text-color;
    border-radius: 12px;

    .item {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 5px;

        &:hover {
            cursor: pointer;
            transition: .2s;
            border-radius: 5px;
            color: $text-color2;
        }
    }
}
</style>