<template>
    <div>
        <h1>Show Random Image From Images</h1>

        <img v-if="selected" :src="selected" alt="img" />
    </div>
</template>

<script>
export default {
    data: function() {
        var images = [
            "https://via.placeholder.com/500/0000FF/808080 ?Text=Digital.com",
            "https://via.placeholder.com/500/FF0000/FFFFFF?Text=Down.com",
            "https://via.placeholder.com/500/FFFF00/000000?Text=WebsiteBuilders.com",
            "https://via.placeholder.com/500/000000/FFFFFF/?text=IPaddress.net"
        ];
        return {
            imgs: images,
            selected: ""
        };
    },

    methods: {
        randomImgSelected: function(img) {
            return img[Math.floor( Math.random() * this.imgs.length)];
        }
    },

    created() {
        setInterval(() => {
            this.selected = this.randomImgSelected(this.imgs);
        }, 1000)
    },

    name: "Tuto12"
};
</script>

<style scoped>
    
</style>