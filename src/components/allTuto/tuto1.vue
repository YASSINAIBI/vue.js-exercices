<template>
    <div class="Tuto">
        <h1>Show hide passwor / text input</h1>
        <input :type="inputType" class="input p-3 m-3">
        <button class="btn btn-primary" @click.prevent="switchInput"> {{ showHide }} </button>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            inputType: "password",
            showHide: "show"
        }
    },

    methods: {
        switchInput() {
            this.inputType = this.inputType === "password" ? "text" : "password";
            this.showHide = this.showHide === "show" ? "hide" : "show";
        }
    },

    name: "Tuto1",

}
</script>

<style lang="scss" scoped >

    .flex {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

</style>