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
    <nav class=" bg-black shadow" id="app">
        <div class="container">
            <div class="md:flex justify-between items-center">
                <!-- left section -->
                <div class="flex justify-between items-center" dir="rtl">
                    <div class="border-r-4 border-t-4 border-b-4 border-sky-500 rounded-s-full">
                        <div class="text-white text-xl font-bold h-16 w-96 p-4 hover:text-gray-700 md:text-3xl"><span
                                class="m-5"><a href="/">My todo's app</a></span></div>
                    </div>
                    <div class="md:hidden">
                        <button type="button"
                            class="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none"
                            @click="isOpen = !isOpen">
                            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                <path
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- right section -->
                <div class="flex-col mt-3 md:flex-row md:mt-0 md:flex" :class="isOpen ? 'flex' : 'hidden'">
                    <a href="/login" class="text-white font-bold text-3sm hover:font-medium md:mx-4">Login</a>
                    <a href="/showtodo" class="text-white font-bold text-3sm hover:font-medium md:mx-4">My tasks</a>
                </div>
            </div>
        </div>
    </nav>
    <form @submit.prevent="addtask">
        <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <div class="max-w-md mx-auto">
                        <div class="flex items-center space-x-5">
                            <div
                                class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                                Do</div>
                            <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                                <h2 class="leading-relaxed">{{ mytask.title }}</h2>
                                <p class="text-sm text-gray-500 font-normal leading-relaxed">A good organisation is the
                                    key ...</p>
                            </div>
                        </div>
                        <div class="divide-y divide-gray-200">
                            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div class="flex flex-col">
                                    <label class="leading-loose">Task title</label>
                                    <input type="text" v-model="mytask.title"
                                        class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        placeholder="Task title..." required>
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Task description</label>
                                    <textarea type="text" v-model="mytask.description"
                                        class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        placeholder="Describe your task..." required></textarea>
                                </div>
                                <div class="flex items-center space-x-4">
                                    <div class="flex flex-col">
                                        <label class="leading-loose">Start</label>
                                        <div class="relative focus-within:text-gray-600 text-gray-400">
                                            <input type="date" v-model="mytask.Start_date"
                                                class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                placeholder="25/02/2020" required>
                                            <div class="absolute left-3 top-2">
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col">
                                        <label class="leading-loose">End</label>
                                        <div class="relative focus-within:text-gray-600 text-gray-400">
                                            <input type="date" v-model="mytask.end_date"
                                                class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                placeholder="26/02/2020" required>
                                            <div class="absolute left-3 top-2">
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor"
                                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Priority</label>
                                    <select name="priority" id="selected" v-model="mytask.priority"
                                        class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" required>Priority
                                        <option value="Done">Done</option>
                                        <option value="Undone">Undone</option>
                                    </select>

                                </div>
                            </div>
                            <div class="pt-4 flex items-center space-x-4">

                                <button type="submit"
                                    class="bg-green-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-green-600">Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>