<script setup>
import { useTasksStore } from '@/stores/tasks';
import { ref } from 'vue';
const store = useTasksStore();
var mytask = ref({
    title: "",
    description: "",
    end_date: "",
    Start_date: "",
    priority: ""
})

const addtask = () => {
    console.log(mytask.value.title, mytask.value.description, mytask.value.end_date, mytask.value.Start_date, mytask.value.priority);
    store.createTask(mytask.value.title, mytask.value.description, mytask.value.end_date, mytask.value.Start_date, mytask.value.priority);
}
</script>

<template>
    <form @submit.prevent="addtask">
        title <input type="text" v-model="mytask.title">
        description <input type="text" v-model="mytask.description">
        end_date <input type="text" v-model="mytask.end_date">
        Start_date <input type="text" v-model="mytask.Start_date">
        priority <input type="text" v-model="mytask.priority">
        <button type="submit">Add</button>
    </form>
</template>