<template>
    <div>
        <h1>Validate Button Depend On Field</h1>

        <form class="container">
            <div class="form-group">
                <label for="name">name</label>
                <input type="text" class="form-control" id="name" v-model="name">
            </div>
            <div class="form-group">
                <label for="comment">comment</label>
                <input type="text" class="form-control" id="comment" v-model="comment">
            </div>
            <div class="form-group">
                <label for="message">message</label>
                <input type="text" class="form-control" id="message" v-model="message">
            </div>

            <button :disabled="!name || !comment || !message" :class=" !name || !comment || !message ? 'isDisabled btn btn-success': 'btn btn-success' "> Submit </button>
        </form>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            name: null,
            comment: null,
            message: null
        }
    },

    name: 'Tuto8'
}
</script>

<style lang="scss" scoped>
    .isDisabled {
        cursor: not-allowed;
        border: unset;
        background-color: red !important;
            &:focus{
                outline: unset;
                border: unset;
            }
    }
</style>
