<template>
    <ul class="actions">
        <li class="action"><Bell size="14" /></li>
        <li class="action"><Activity size="14" /></li>
        <li class="action"><User size="14" /></li>

    </ul>
</template>

<script>
import { Bell, Activity, User } from "lucide-vue-next";
    export default {
        components: {
            Bell, Activity, User
        },
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/variables";

    .actions {
        display: flex;
        align-items: center;
        gap: 20px;
        list-style: none;
        margin-bottom: 20px;

        .action {
            background: $color-gradient-5;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $arrow-color;

            &:hover {
                transition: .3s;
                cursor: pointer;
                color: $text-color2;
                background-color: $card-bg;
            }
        }
    }

</style>