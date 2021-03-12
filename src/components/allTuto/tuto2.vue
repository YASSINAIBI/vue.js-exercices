<template>
    <div>
        <h1>from slug to url</h1>
        <!-- remove - from first of string and last of string -->
        <input type="text" placeholder="enter your slug" class="input m-3 p-3" v-model="Input">
        <button class="btn btn-primary" @click.prevent="convertFunction">Change</button>
        <p class="output"> {{ Output }} </p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            Input: "",
            Output: "this is tutorial"
        }
    },

    methods: {
        convertFunction() {
            var slug = this.Input;

            // convert to lower case
            slug = slug.toLowerCase();

            // replace space with -
            slug = slug.replace(/\s+/g, "-");

            // replace & with and
            slug = slug.replace(/&/g, "-and-");

            // remove - from first of string
            if(slug.startsWith("-")){
                // slug = slug.substring(1, slug.length);
                slug = slug.replace(/^(.)/g, '');
            }
            if(slug.endsWith("-")){
                // slug = slug.substring(0, slug.length - 1);
                slug = slug.replace(/(.)$/g, '');
            }

            this.Output = slug;
        }
    },

    name: "Tuto2"
}
</script>

<style lang="scss" scoped >
    .output {
        margin: 1% 30%;
        padding: 3%;
        border-radius: 25px;
        font-size: 25px;
        background-color: yellowgreen;
    }
</style>
