<template>
    <label for="AcceptConditions"
        class="relative inline-block h-8 w-12 cursor-pointer [-webkit-tap-highlight-color:_transparent]">
        <input onclick="document.body.classList.toggle('dark')" type="checkbox" id="AcceptConditions"
            class="peer sr-only" />

        <span class="absolute inset-0 m-auto h-2 rounded-full bg-gray-300"></span>

        <span
            class="absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-gray-500 transition-all peer-checked:start-6 peer-checked:[&_>_*]:scale-0">
            <span class="absolute inset-0 m-auto size-4 rounded-full bg-gray-200 transition"> </span>
        </span>
    </label>
</template>

<script>
document.addEventListener('DOMContentLoaded', () => {
    let toggleDark = document.getElementById('AcceptConditions')
    toggleDark.addEventListener('click', () => {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark')
        } else {
            document.documentElement.classList.add('dark')
        }
    })
})

</script>
