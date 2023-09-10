<template>
  <div class="mt-2 grid grid-cols-1 md:grid-cols-3 border rounded-lg">
    <div class="flex flex-col m-2 form-group">
      <label for="application_id" class="hidden">Number</label>
      <input type="text"
             :value="application_id"
             @input="$emit('update:application_id', $event.target.value)"
             placeholder="Номер визовой анкеты"
             class="w-100 mt-1 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"/>
    </div>
    <div class="flex flex-col m-2">
      <label for="passport_id" class="hidden">Number</label>
      <input type="text"
             @input="$emit('update:passport_id', $event.target.value)"
             placeholder="Номер паспорта"
             class="w-100 mt-1 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"/>
    </div>
    <div class="flex items-center"
         @click="$emit('add_app', application_id, passport_id)">
      <!--          Add Svg Icon-->
      <svg

          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="32"
          height="32"
          class="ml-2 cursor-pointer"
      >
        <path fill="none" d="M0 0h24v24H0z"/>
        <path
            fill="green"
            d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
        />
      </svg>

      <!--          Remove Svg Icon-->
      <!--      <svg-->

      <!--          xmlns="http://www.w3.org/2000/svg"-->
      <!--          viewBox="0 0 24 24"-->
      <!--          width="24"-->
      <!--          height="24"-->
      <!--          class="ml-2 cursor-pointer"-->
      <!--      >-->
      <!--        <path fill="none" d="M0 0h24v24H0z" />-->
      <!--        <path-->
      <!--            fill="#EC4899"-->
      <!--            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"-->
      <!--        />-->
      <!--      </svg>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "inputAppointmentNumber",
  props: {
    application_id: {
      type: String,
      required: true,
    },
    passport_id: {
      type: String,
      required: true,
    },
  },
  emits: ['update:application_id'],
  data() {
    return{}
  }
}
</script>

<style scoped>

</style>
