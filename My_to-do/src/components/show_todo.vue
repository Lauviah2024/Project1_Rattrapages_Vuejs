<script setup>
import { useTasksStore } from '@/stores/tasks';
const store = useTasksStore();
//var allTasks = store.getTasks();

function remtask(task) {
    var rmtask = store.removeTask(task);
    console.log(rmtask);
}

function updtask(task) {
    // console.log(task)
    store.updateTasks(task)
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
                    <a href="/login" class="text-white font-bold text-3sm hover:font-medium md:mx-4">Logout</a>
                    <a href="/todo" class="text-white font-bold text-3sm hover:font-medium md:mx-4">Add</a>
                </div>
            </div>
        </div>
    </nav>
    <form @submit.prevent="store.getTasks()">
        <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12" v-for="(task, index) in store.tasks" :key="index">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <div class="max-w-md mx-auto">
                        <div class="flex items-center space-x-5">
                            <div
                                class="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                                Do</div>
                            <div class="block pl-2 font-semibold text-xl self-start text-gray-700">
                                <h2 class="leading-relaxed">{{ task.title }}</h2>
                                <p class="text-sm text-gray-500 font-normal leading-relaxed">A good organisation is the key ...</p>
                            </div>
                        </div>
                        <div class="divide-y divide-gray-200">
                            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div class="flex flex-col">
                                    <label class="leading-loose">Task title</label>
                                    <input type="text" v-model="task.title"
                                        class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        placeholder="Event title">
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Task description</label>
                                    <textarea type="text" v-model="task.description"
                                        class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                        placeholder="Optional"></textarea>
                                </div>
                                <div class="flex items-center space-x-4">
                                    <div class="flex flex-col">
                                        <label class="leading-loose">Start</label>
                                        <div class="relative focus-within:text-gray-600 text-gray-400">
                                            <input type="date" v-model="task.startdate"
                                                class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                placeholder="25/02/2020" required>
                                            <div class="absolute left-3 top-2">
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col">
                                        <label class="leading-loose">End</label>
                                        <div class="relative focus-within:text-gray-600 text-gray-400">
                                            <input type="date" v-model="task.enddate"
                                                class="pr-4 pl-10 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                                                placeholder="26/02/2020" required>
                                            <div class="absolute left-3 top-2">
                                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <label class="leading-loose">Priority</label>
                                    <select name="priority" id="selected" v-model="task.priority" class="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600">Priority
                                        <option value="Done" selected>Done</option>
                                        <option value="Undone">Undone</option>
                                    </select>
                                    
                                </div>
                            </div>
                            <div class="pt-4 flex items-center space-x-4">
                                <button type="submit" @click="remtask(task.id)"
                                    class="flex justify-center items-center w-full text-gray-900 px-4 py-3 rounded-md focus:outline-none bg-red-600 hover:bg-red-700">
                                    <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M6 18L18 6M6 6l12 12"></path>
                                    </svg> Delete
                                </button>
                                <button type="submit" @click="updtask(task)"
                                    class="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none hover:bg-blue-600">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>