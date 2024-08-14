<script setup>

</script>

<template>
    <nav class="bg-blue-600 h-24">
        <div class="flex items-center justify-between">
            <div class="py-4 flex mx-auto">
                <p class="font-mono text-2xl italic">My todo's app</p>
            </div>
            <div class="border-black rounded-md mr-10">
                <RouterLink to="/register" class="bg-white h-10 w-32 font-mono text-2xl">Register</RouterLink>
            </div>
            <div class="border-black rounded-md mr-10">
                <RouterLink to="/login" class="bg-white h-10 w-32 font-mono text-2xl">Login</RouterLink>
            </div>
        </div>
    </nav>
    <body>
        <div >
            <img src="../assets/imagehome2.jpg" width="800em" alt="">
            <div>
                <RouterLink to="./todo" type="submit">Start here ...</RouterLink>
            </div>
        </div>
    </body>

    <footer class="bg-blue-600 h-24">
         esrtdyugiojprtdyugi
    </footer>

</template>