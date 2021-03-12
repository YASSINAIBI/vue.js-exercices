<template>
    <div class="Tuto">
        <h1>this is tutorials page</h1>
        <div class="flex">
            <router-link to="/tuto/tuto1" class="mb-4"> SHOW / HIDE input texte/password </router-link>
            <router-link to="/tuto/tuto2" class="mb-4"> Convert Title To Slug </router-link>
            <router-link to="/tuto/tuto3" class="mb-4"> Change Website Colors with CSS Custom Variables </router-link>
            <router-link to="/tuto/tuto4" class="mb-4"> Calculate Product Price With Computed Properties </router-link>
            <router-link to="/tuto/tuto5" class="mb-4"> Get Github Repositories With Axios Client </router-link>
            <router-link to="/tuto/tuto6" class="mb-4"> Create Simple Form Validation </router-link>
            <router-link to="/tuto/tuto7" class="mb-4"> How To Create To-Do List </router-link>
            <router-link to="/tuto/tuto8" class="mb-4"> Validate Button Depend On Field </router-link>
            <router-link to="/tuto/tuto9" class="mb-4"> Create Gradient Generator </router-link>
            <router-link to="/tuto/tuto10" class="mb-4"> Toggle Class With All Methods </router-link>
            <router-link to="/tuto/tuto11" class="mb-4"> Create Tabs </router-link>
            <router-link to="/tuto/tuto12" class="mb-4"> Show Random Image From Images </router-link>
            <router-link to="/tuto/tuto13" class="mb-4"> Show Hide Message With Transition </router-link>
            <router-link to="/tuto/tuto14" class="mb-4"> Create Accordion For FAQ </router-link>
            <router-link to="/tuto/tuto15" class="mb-4"> Calculate Textarea and Input Characters </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Tuto',
}
</script>

<style lang="scss" scoped >

    .flex {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

</style>

