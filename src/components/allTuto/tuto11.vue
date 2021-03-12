<template>
    <div class="container">
        <h1>Create Tabs</h1>

        <ul class="tabs">
            <li @click="selectedTab = '1'" :class="{active: selectedTab === '1'}">tab1</li>
            <li @click="selectedTab = '2'" :class="{active: selectedTab === '2'}">tab2</li>
            <li @click="selectedTab = '3'" :class="{active: selectedTab === '3'}">tab3</li>
            <li @click="selectedTab = '4'" :class="{active: selectedTab === '4'}">tab4</li>
        </ul>

        <div class="tabsContents">
            <div v-if="selectedTab === '1'">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                fugiat molestiae provident autem aspernatur possimus quibusdam,
                nemo, quod et mollitia eius quos dignissimos dolorem maiores,
                similique a illo aliquam distinctio.
            </div>
            <div v-if="selectedTab === '2'">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                corrupti, soluta rerum assumenda eius sapiente ratione dicta
                tempora culpa ex facilis accusamus aliquid non velit maxime
                harum impedit et natus!
            </div>
            <div v-if="selectedTab === '3'">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Quisquam aut natus ullam omnis quasi aliquam voluptatum, quaerat
                adipisci nesciunt eos qui in, maiores voluptas. Tempore
                laudantium voluptatibus numquam modi in!
            </div>
            <div v-if="selectedTab === '4'">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                accusamus pariatur officia alias ullam dignissimos voluptas ut
                earum ex, ducimus nisi delectus ipsam, excepturi adipisci
                ratione optio maxime praesentium aliquam.
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            selectedTab: "1"
        }
    },

    name: "Tuto11"
};
</script>

<style lang="scss" scoped>
.tabs {
    display: flex;
    margin: 0;
    padding: 1%;
    li {
        list-style: none;
        width: 25%;
        padding: 1%;
        cursor: pointer;
        transition: all .5s ease-in-out;
    }
    .active {
        background-color: aquamarine;
        color: white;
        padding: 1%;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
    }
}
</style>
