<template>
    <div class="container">
        <div class="card mb-5" v-for="FAQ in FAQ" :key="FAQ.id">
            <div class="card-body">
                 <p class="questions" @click="FAQ.open = !FAQ.open"> <span> Question{{ FAQ.id }} </span> : {{ FAQ.title }} </p>
                <transition name="bounce"> 
                    <p class="answers" v-show="FAQ.open"> {{ FAQ.replay }} </p>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import FAQ from '../../json/FAQ.json'

export default {
    data: function() {
        return {
            FAQ: FAQ
        }
    },

    name: "Tuto14",
}
</script>

<style lang="scss" scoped>
.answers{
    background-color: chartreuse;
    padding: 3%;
    border-radius: 20px;
    opacity: 0.5;
}
.questions {
    cursor: pointer;
    span {
        font-weight: bold;
        font-size: 20px;
    }
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
