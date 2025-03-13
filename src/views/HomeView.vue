<script setup>
import TheHomeIcon from '@/components/base/TheHomeIcon.vue';
import TheRadioGroup from '@/components/TheRadioGroup.vue';
import TheSwitch from '@/components/base/TheSwitch.vue';
import TheContainer from '@/components/base/TheContainer.vue';
</script>

<template>
  <Master>


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

  </Master>
</template>
