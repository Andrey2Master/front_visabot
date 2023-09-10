<template>
  <div class="relative flex h-fit w-64 flex-col items-start m-1 p-2 bg-white rounded-lg cursor-pointer bg-opacity-90 group hover:bg-opacity-100"
       draggable="true">
    <button class="absolute top-0 right-0 flex items-center justify-center hidden w-5 h-5 mt-3 mr-2 text-gray-500 rounded hover:bg-gray-200 hover:text-gray-700 group-hover:flex">
      <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
      </svg>
    </button>
    <div class="flex items-center justify-between w-full mt-1 text-xs font-medium text-gray-400">
      <span class="flex items-center h-6 px-3 text-xs font-semibold text-pink-500 bg-pink-100 rounded-full">{{ appointment.city }}</span>

      <span v-if="appointment.status ==='ACTIVE'" class="flex items-center h-6 px-3 text-xs font-semibold text-black bg-green-500 rounded-full">{{ appointment.status }}</span>
      <span v-else class="flex items-center h-6 px-3 text-xs font-semibold text-black bg-yellow-100 rounded-full">{{ appointment.status }}</span>

    </div>
    <h4 class="mt-1 text-sm font-medium">{{ appointment.username }}</h4>
    <h4 class="mt-1 text-sm font-medium">{{ appointment.application_id }}</h4>
    <h4 class="mt-1 text-sm font-medium">{{ appointment.email }}</h4>

    <div class="flex items-center w-full mt-3 text-xs font-medium text-gray-400">
      <div class="flex items-center">
        <svg class="w-4 h-4 text-green-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
             fill="currentColor">
          <path fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"/>
        </svg>
        <span class="ml-1 leading-none">{{ appointment.start_date.substring(0, 10) }}</span>
      </div>
      <div v-if="appointment.start_date!==appointment.end_date" class="relative flex items-center ml-4">
        <svg class="w-4 h-4 text-red-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
             fill="currentColor">
          <path fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"/>
        </svg>
        <span class="ml-1 leading-none">{{ appointment.end_date.substring(0, 10) }}</span>
      </div>
      <div class="flex items-center ml-4">
        <svg class="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
             fill="currentColor">
          <path fill-rule="evenodd"
                d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"
                clip-rule="evenodd"/>
        </svg>
        <span class="ml-1 leading-none">{{ appointment.tariff }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    appointment: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>
