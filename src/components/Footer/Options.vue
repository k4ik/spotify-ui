<template>
    <ul class="options">
        <li>
            <ListMusic size="18" />
        </li>
        <li>
            <VolumeX size="18" />
        </li>
        <li>
            <Maximize2 size="18" />
        </li>
    </ul>
</template>

<script>
import { ListMusic, VolumeX, Maximize2 } from "lucide-vue-next";
export default {
    components: {
        ListMusic, VolumeX, Maximize2,
    },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.options {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 20px;

    li {
        color: $text-color;

        &:hover {
            cursor: pointer;
            transition: .2s;
            color: $text-color2;
        }
    }
}
</style>