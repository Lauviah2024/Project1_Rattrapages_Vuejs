<script setup>
import { useAuthStore } from '@/stores/auth';
const store = useAuthStore();
</script>

<template>
    <nav class=" bg-black shadow" id="app">
        <div class="container">
            <div class="md:flex justify-between items-center">
                <!-- left section -->
                <div class="flex justify-between items-center" dir="rtl">
                    <div class="border-r-4 border-t-4 border-b-4 border-sky-500 rounded-s-full">
                        <div class="text-white text-xl font-bold h-16 w-96 p-4 hover:text-gray-700 md:text-3xl"><span
                                class="m-5">My todo's app</span></div>
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
                    <a href="#" class="text-white font-bold text-3sm hover:font-medium md:mx-4">Blog</a>
                </div>
            </div>
        </div>
    </nav>

    <body class="bg-slate-400 w-full">
        <div class="w-full pr-5">
            <div class="md:flex justify-between w-full items-center">
                <div dir="rtl">
                    <img src="../assets/home_image.jpg" alt="Todo" class="rounded-s-full">
                </div>
                <div class="text-2xl p-11 justify-items-center">
                    <strong>
                        <span class="font-mono text-center"> Welcome to your todo app ! Note all your tasks and organise
                            them...</span><br>
                        <span class="font-mono text-center pl-11"> Are you ready ? </span><br>
                    </strong><br>
                    <RouterLink to="/showtodo">
                        <button class="bg-slate-500 hover:bg-black text-white font-bold py-2 px-4 rounded-full">
                            Get started
                        </button>
                    </RouterLink>
                </div>
            </div>
        </div>
    </body>
    <footer class="bg-black h-28">
        <span class="text-white">Made by Monyah</span>
    </footer>


</template>