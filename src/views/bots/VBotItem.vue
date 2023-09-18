<template>
  <div
      class="group relative m-1 flex h-fit w-56 cursor-pointer flex-col items-start shadow-lg rounded-lg bg-gray-100 bg-opacity-90 p-2 hover:bg-opacity-100"
      draggable="true"
      @click="$emit('bot-select')"
  >
    <button
        class="absolute right-0 top-0 mr-2 mt-3 hidden h-5 w-5 items-center justify-center rounded text-gray-500 hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
      <svg class="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
      </svg>
    </button>
    <div class="mt-1 flex w-full items-center justify-between text-xs font-medium text-gray-400">
      <span
          class="flex h-6 items-center rounded-full bg-gray-200 px-3 text-xs font-semibold text-black">{{ name }}</span>
      <span class="flex h-6 items-center rounded-full bg-green-500 px-3 text-xs font-semibold text-black">OK
      </span>
    </div>
    <h4 class="mt-1 text-sm font-medium">{{ category }}</h4>
    <!--    <h4 class="mt-1 text-sm font-medium">1111</h4>-->
  </div>
</template>

<script>
export default {
  name: "VBotItem",
  props: {
    name: String,
    category: String
  },
}
</script>

<style scoped>

</style>
