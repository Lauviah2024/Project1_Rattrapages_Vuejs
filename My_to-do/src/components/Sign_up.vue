<script setup>
import { useAuthStore } from '@/stores/auth';
import { ref } from 'vue';
import bcrypt from 'bcryptjs';
const store = useAuthStore();
// const rounds = 10;
var email = ref("");
var password = ref("");
var password_confirm = ref("");
var isemailvalid = ref(null);
var ispasswordvalid = ref(null)

function verify() {
    if (!email.value || !password.value) {
        isemailvalid.value = "Empty !";
        return false;
    }
    else {
        isemailvalid.value = "";
    }

    if (password.value != password_confirm.value) {
        ispasswordvalid.value = "Password don't match !";
        return false;
    }
    else {
        ispasswordvalid.value = "";
    }

    // Validate emails
    function validateemail(mail) {
        var Reg = new RegExp(/^[a-z0-9.-]{2,}@+[a-z0-9.-]{2,}$/i);
        return Reg.test(mail);
    }
    // Validate password
    function validateMDP(mdp) {
        var Reg = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
        return Reg.test(mdp);
    }

    if (!validateemail(email.value) || !validateMDP(password.value)) {
        isemailvalid.value = "Invalid input !"
        return false
    }
    else {
        isemailvalid.value = "";
    }

    var user = ref({
        email: email.value,
        password: bcrypt.hashSync(password.value)
    })
    console.log(user.value)
    store.addUser(user.value)
}

</script>

<template>

    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Create your
                account</h2>
        </div>

        <div  class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <span>{{ isemailvalid }}</span><br><br>
            <form class="space-y-6" @submit.prevent="verify">
                <div>
                    <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email
                        address</label>
                    <div class="mt-2">
                        <input v-model.trim="email" id="email" type="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                    </div>
                </div>

                <div>
                    <span>{{ ispasswordvalid }}</span><br>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    </div>
                    <div class="mt-2">
                        <input id="password" type="password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            v-model.trim="password" />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Confirm
                            password</label>
                    </div>
                    <div class="mt-2">
                        <input id="password" type="password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            v-model.trim="password_confirm" />
                    </div>
                </div>
                <div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                        up</button>
                </div>
            </form>

            <p class="mt-10 text-center text-sm text-gray-500">
                Already a member?
                <a href="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</a>
            </p>
        </div>
    </div>
</template>

<style></style>