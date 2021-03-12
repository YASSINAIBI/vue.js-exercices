<template>
    <div>
        <h1> Toggle Class With All Methods </h1>

        <button class="btn btn-primary " :class="{selected : isSelected}" @click="isSelected = !isSelected"> methode1 </button>
        <button class="btn btn-primary" @click="toggle"> methode2 </button>
        <button class="btn btn-primary" @click="otherToggleMethod($event, 'selected')"> methode3 </button>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            isSelected: false
        }
    },

    methods: {
        toggle: function(event) {
            event.target.classList.toggle('selected');
        },

        otherToggleMethod: function(event, className) {
            event.target.classList.toggle(className);
        }
    },

    name: "Tuto10"
}
</script>

<style lang="scss" scoped>
    .selected {
        background-color: chartreuse !important;
    }

    button {
        margin: 3%;
        box-shadow: unset;
        border-color: unset;
            &:focus {
                outline: unset;
                box-shadow: unset;
                border-color: unset;
            }
    }
</style>
