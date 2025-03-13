<script setup>

import TheHomeIcon from '@/components/base/TheHomeIcon.vue';
import TheRadioGroup from '@/components/TheRadioGroup.vue';
import TheContainer from '@/components/base/TheContainer.vue';
import TheSwitch from '@/components/base/TheSwitch.vue';

</script>

<template>
  <Master class=" ">


    <TheContainer>
      <TheHomeIcon class="place-self-center my-5" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam libero adipisci corporis a. Architecto totam
        tempora fuga adipisci nobis distinctio, at beatae mollitia, nisi nemo incidunt consectetur enim rerum labore.
      </p>
    </TheContainer>

    <TheContainer class=" flex justify-between px-10 space-x-4">
      <TheRadioGroup class="bg-red-500 !w-[500px] rounded " />
      <TheRadioGroup class="bg-blue-500 !w-[500px] rounded " />
      <TheRadioGroup class="bg-green-500 !w-[500px] rounded " />
    </TheContainer>

    <button class="btn bg-dark mr-3 "> Click</button>
    <button class="btn bg-[#3f3cbb]"> Click</button>
    <button class="btn bg-danger ms-3"> Click</button>

    <TheContainer>
      <h1 class=" red">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo quidem quisquam provident.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur impedit sapiente sunt praesentium quasi
        molestiae recusandae, labore, voluptatem quis odit mollitia fugit deleniti laboriosam quae corrupti minus sint
        esse quaerat!</p>
    </TheContainer>
  </Master>
</template>
