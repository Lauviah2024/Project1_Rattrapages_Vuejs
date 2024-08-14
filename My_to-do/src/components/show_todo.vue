<script setup>
import { useTasksStore } from '@/stores/tasks';
import { ref } from 'vue';
var mytask = ref({
    title: "",
    description: "",
    end_date: "",
    Start_date: "",
    priority: ""
})
const store = useTasksStore();
var allTasks = store.getTasks();
</script>

<template>
    <form  @submit.prevent="store.getTasks()">
        <div v-for="task in allTasks" :key="task.id">
            title <input type="text" v-model="mytask.title">
            description <input type="text" v-model="mytask.description">
            end_date <input type="text" v-model="mytask.end_date">
            Start_date <input type="text" v-model="mytask.Start_date">
            priority <input type="text" v-model="mytask.priority">
        </div>
        <button type="submit">Add</button>
    </form>
</template>