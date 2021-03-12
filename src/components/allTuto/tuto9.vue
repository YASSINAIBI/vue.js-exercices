<template>
    <div class="container">
        <h1>Create Gradient Generator</h1>

        <div
            class="linear-generat"
            :style="{
                background: 'linear-gradient(' + direction + ',' + color1 + ' ' + color1range + '%' + ',' + color2 + ' ' + color2range + '%' + ')'
            }"
        ></div>

        <div class="row">
            <div class="col">
                <form>
                    <div class="form-group">
                        <label for="color1"> color1 </label>
                        <input
                            type="color"
                            id="color1"
                            class="form-control"
                            v-model="color1"
                        />

                        <label for="customRange2">range</label>
                        <input type="range" class="custom-range" min="0" max="100" id="customRange2" v-model="color1range">
                        <p class="badge badge-info"> {{ color1range + '%' }} </p>
                    </div>

                    <div class="form-group">
                        <label for="color2"> color2 </label>
                        <input
                            type="color"
                            id="color2"
                            class="form-control"
                            v-model="color2"
                        />

                        <label for="customRange2">range</label>
                        <input type="range" class="custom-range" min="0" max="100" id="customRange2" v-model="color2range">
                        <p class="badge badge-info"> {{ color2range + '%' }} </p>
                    </div>

                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Select direction</label>
                        <select class="form-control" id="exampleFormControlSelect1"  v-model="direction">
                            <option value="to left">to left</option>
                            <option value="to right">to right</option>
                            <option value="to top">to top</option>
                            <option value="to bottom">to bottom</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="customRange1">Example range</label>
                        <input type="range" class="custom-range" min="0" max="360" id="customRange1" v-model="deg" @input="generatLinear">
                    </div>

                    <div class="card mb-5">
                        <div class="card-body">
                            css generated Code: <br />
                            <!-- background: linear-gradient(to left, #333, #eee ); -->
                            background: linear-gradient(
                            {{ direction + ',' + color1 + ' ' + color1range + '%' + ',' + color2 + color1range + '%' }} )
                        </div>
                    </div>

                </form>
            </div>
            <div class="col"></div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            color1: "#000000",
            color2: "#000000",
            direction: "to left",
            deg: 0,
            color1range: "50%",
            color2range: "50%"
        };
    },

    methods: {
        generatLinear: function() {

            this.direction = this.deg + "deg";
        }
    },

    name: "Tuto9"
};
</script>

<style lang="scss" scoped>
.linear-generat {
    border: 5px solid dimgray;
    width: 100%;
    height: 160px;
    border-radius: 50px;
}

// background: linear-gradient(217deg, #333, #FFF 50%);

</style>
