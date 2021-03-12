<template>
    <div class="container">
        <h1> Show Hide Message With Transition </h1>

        <button class="btn btn-primary" @click="message = !message"> {{ message ? 'hide' : 'show' }} </button>

        <transition name="bounce">
            <div class="div" v-if="message">
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis neque quia nobis distinctio ab sapiente mollitia quos! Eligendi, veniam molestiae quasi, eum modi tempora debitis, aliquid consectetur quo porro excepturi. </p>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            message: false
        }
    },

    name: "Tuto13"
}
</script>

<style lang="scss" scoped>
    .div {
        padding: 5%;
        background-color: bisque;
        border-radius: 20px;
        margin-top: 3%;
    }

    .bounce-enter-active {
    animation: bounce-in .5s;
    }
    .bounce-leave-active {
    animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.5);
    }
    100% {
        transform: scale(1);
    }
    }
</style>
