<script>
export default {
  props: ["number", "year", "message"],
};
</script>
<template>
  <div class="grid place-items-center text-center w-60 lg:w-full">
    <div
      class="grid place-items-center bg-white w-36 h-36 border-8 border-primary-300 rounded-full"
    >
      <p class="text-6xl font-bold text-primary-300 relative -left-6">
        {{ number }}
      </p>
    </div>
    <p class="text-2xl font-bold text-white">|</p>
    <p
      class="text-2xl font-bold text-primary-800 w-full"
      :class="number % 2 == 0 ? 'bg-primary-400' : 'bg-primary-300'"
    >
      {{ year }}
    </p>
    <p class="text-xl font-bold text-primary-800 h-10">
      {{ message }}
    </p>
  </div>
</template>
