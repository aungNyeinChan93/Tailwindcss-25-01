<template>
    <header class="border-b border-gray-200 bg-gray-50">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div class="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">Lorem ipsum dolor sit amet</h1>

                    <p class="mt-1.5 text-sm text-gray-500">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, recusandae.
                    </p>
                </div>

                <div class="flex items-center gap-4">
                    <button
                        class="inline-flex items-center justify-center gap-1.5 rounded-sm border border-gray-200 bg-blue-700 text-white px-5 py-3 transition hover:text-gray-700 focus:ring-3 focus:outline-hidden"
                        type="button">
                        <span class="text-sm font-medium">Register </span>
                    </button>

                    <RouterLink
                        class="inline-block rounded-sm bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:ring-3 focus:outline-hidden"
                        :to="{ name: 'login' }">
                        Login
                    </RouterLink>
                    <TheToggleBtn />
                </div>
            </div>
        </div>
    </header>
    <main class="w-full h-screen">
        <slot />
    </main>
</template>

<script setup>
import TheToggleBtn from '../base/TheToggleBtn.vue';

</script>