<template>
    <div class="container">
        <div class="form-group">
            <h1> Calculate Textarea and Input Characters </h1>
            <label for="exampleFormControlTextarea1"></label>
            <textarea @input="CalculateTextarea" class="form-control" id="exampleFormControlTextarea1" rows="10" :maxlength="maxlength" v-model="textInput"></textarea>
            <h2> Left | <span :class="{'lengthStyle': inputLength == 0}"> {{ inputLength }} </span> </h2>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            textInput: "",
            inputLength: 20,
            maxlength: 20
        }
    },
    methods: {
        CalculateTextarea: function() {
            this.inputLength = this.maxlength - this.textInput.length
        }
    },
    name: "Tuto15"
}
</script>

<style lang="scss" scoped>
    .lengthStyle {
        color: red;
        font-size: 40px;
        font-weight: bold;
    }
</style>
