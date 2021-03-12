<template>
    <div class="container mb-5">
        <h1> How To Create To-Do List </h1>

        <div class="alert alert-danger" role="alert" v-for="(error ,index) in errors" :key="index">
            {{ error }}
        </div>
    <form>
        <div class="form-group">
            <label for="todoInput">add your todo</label>
            <input type="text" id="todoInput" class="form-control input" v-model="todoText">
            <input type="submit" class="btn btn-success m-3" value="ADD" @click.prevent="addTodoItems">
            <input type="submit" class="btn btn-danger m-3" value="Delete All" @click.prevent="deleteAll" :disabled="todoItems.length < 2">
        </div>
    </form>

    <div class="allTodo m-3" v-for="(todoItem, index) in todoItems" v-bind:key="index">
        <div class="card">
            <div class="card-body">
                <h2 @click.prevent="todoItem.done = !todoItem.done" :style=" { 'text-decoration': todoItem.done ? 'line-through' : '' } "> <span class="badge badge-secondary"> {{ index }} </span> {{ todoItem.word }} </h2>
                <button class="btn btn-danger" @click="deleteTask(index)">Delete</button>
            </div>
        </div>
    </div>

    </div>
</template>

<script>
export default {
    data: function() {
        return {
            todoText: "",
            todoItems: [],
            errors: []
        }
    },

    methods: {
        addTodoItems: function () {
            this.errors = [];

            if(!this.todoText){
                this.errors.push("you can't leave task empty");
            }

            if(!this.errors.length){
                this.todoItems.push({ word: this.todoText, done: false });
                this.todoText = "";
            }
        },
        deleteTask: function(index) {
            this.todoItems.splice(index, 1);
        },
        deleteAll: function() {
            this.todoItems = []
        }
    },

    name: "Tuto7"
}
</script>

<style lang="scss" scoped>
    .input {
        width: 50%;
        margin-left: 24%;
    }

    // text-decoration: line-through;
</style>


