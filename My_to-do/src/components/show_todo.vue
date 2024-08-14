<script setup>
import { useTasksStore } from '@/stores/tasks';
const store = useTasksStore();
//var allTasks = store.getTasks();

function remtask (task) {
    var rmtask = store.removeTask(task);
    console.log(rmtask);
}

function updtask (task){
    // console.log(task)
    store.updateTasks(task)
}
</script>

<template>
    <form @submit.prevent="store.getTasks()">
        <div class="my-5" v-for="(task, index) in store.tasks" :key="index">
            title <input type="text" v-model="task.title">
            description <input type="text" v-model="task.description">
            end_date <input type="text" v-model="task.enddate">
            Start_date <input type="text" v-model="task.startdate">
            priority <input type="text" v-model="task.priority">
            <button @click="remtask(task.id)" class="mx-4" type="submit">remove</button>
            <button @click="updtask(task)" class="mx-4" type="submit">Update</button>
        </div>
    </form>
</template>