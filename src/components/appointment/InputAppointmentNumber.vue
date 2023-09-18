<template>
  <div class="mt-2 grid place-items-center grid-cols-1 md:grid-flow-col md:place-items-stretch">
    <div class="grid gap-1 place-self-stretch grid-cols-1 md:grid-cols-2 md:col-span-full">
      <template v-if="readOnly">
        <div class="flex flex-col">
          <input type="text" readonly
                 :value="application_id"
                 placeholder="Номер визовой анкеты"
                 class="mt-1 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"/>
        </div>
        <div class="flex flex-col">
          <input type="text" readonly
                 :value="passport_id"
                 placeholder="Номер паспорта"
                 class="mt-1 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"/>
        </div>
      </template>
      <template v-else>
        <div class="flex flex-col">
          <input type="text"
                 v-model="apply_id"
                 placeholder="Номер визовой анкеты"
                 class="mt-1 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"/>
        </div>
        <div class="flex flex-col">
          <input type="text"
                 v-model="pass_id"
                 placeholder="Номер паспорта"
                 class="mt-1 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"/>
        </div>
      </template>
    </div>
    <div class="flex items-center">
      <!--          Add Svg Icon-->
      <svg v-if="!readOnly"
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           width="32"
           height="32"
           class="cursor-pointer"
           @click="addNumber"
      >
        <path fill="none" d="M0 0h24v24H0z"/>
        <path
            fill="green"
            d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2h4zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
        />
      </svg>
      <!--      Remove Svg Icon-->
      <svg v-else
           xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           width="32"
           height="32"
           class="cursor-pointer"
           @click="$emit('remove')"
      >
        <path fill="none" d="M0 0h24v24H0z"/>
        <path
            fill="#EC4899"
            d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9.414l2.828-2.829 1.415 1.415L13.414 12l2.829 2.828-1.415 1.415L12 13.414l-2.828 2.829-1.415-1.415L10.586 12 7.757 9.172l1.415-1.415L12 10.586z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "InputAppointmentNumber",
  props: {
    application_id: {
      type: String,
      required: true,
    },
    passport_id: {
      type: String,
      required: true,
    },
    readOnly: {type: Boolean, default: true},
  },
  emits: ['add', 'remove'],
  data() {
    return {
      apply_id: '',
      pass_id: '',
    }
  },
  methods: {
    addNumber() {
      this.$emit('add', this.apply_id, this.pass_id)
      this.apply_id = this.pass_id = ''
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
