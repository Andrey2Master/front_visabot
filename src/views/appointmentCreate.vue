<template>
  <!-- Appointment Create Form -->
  <div class="mt-8 mx-4">

    <div class="grid grid-cols-1 md:grid-cols-2">


      <form id="form" class="p-2 flex flex-col justify-center" method="POST" @submit.prevent="createApp">
        <div class="flex flex-col form-group has-danger">
          <input type="text" name="name" id="name" placeholder="ФИО контактного лица"
                 v-model="formData.username"
                 required data-pristine-required-message="Нужно ФИО контактного лица"
                 data-pristine-pattern="/[a-z]+$/i"
                 class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"/>
        </div>

        <div class="flex flex-col mt-2 form-group">
          <label for="tel" class="hidden">Number</label>
          <input type="tel" name="tel" id="tel"
                 placeholder="Номер телефона"
                 v-model="formData.phone"
                 required data-pristine-required-message="Нужно указать номер телефона"
                 data-pristine-type="integer"
                 class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"/>
        </div>

        <div class="flex flex-col mt-2 form-group">
          <label for="email" class="hidden">Email</label>
          <input type="email" name="email" id="email" placeholder="Email"
                 v-model="formData.email"
                 required data-pristine-required-message="Нужно указать email"
                 class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"/>
        </div>

        <input-appointment-number
            v-for="(input, index) in formData.apply_ids"
            v-model:application_id="input.application_id"
            v-model:passport_id="input.passport_id"
            :key="index"
            @add_app="addApp"
        />
        <VueDatePicker
            class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"
            placeholder="Диапазон дат для записи"
            v-model="formData.date" range :partial-range="false"
            :enable-time-picker="false"
            teleport-center
            selectText='ВЫБРАТЬ'
            cancelText="ОТМЕНА"
            locale="ru">
        </VueDatePicker>
<!--        <div class="flex flex-col mt-2 form-group">-->
<!--          <label for="date_range" class="hidden">Диапазон дат</label>-->
<!--          <input readonly="" type="text" name="date_range" id="data_range"-->
<!--                 required minlength="5" data-pristine-required-message="Нужно выбрать диапазон дат"-->
<!--                 placeholder="Диапазон дат для записи"-->
<!--                 class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"/>-->
<!--        </div>-->

        <div class="flex flex-col mt-2">
          <label for="city" class="">Выберите визовый центр <span
              class="text-red-700 text-lg">*</span></label>
          <select type="city" name="city" id="city"
                  class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none">
          </select>
        </div>

        <div class="flex flex-col mt-2">
          <label for="tarrif" class="">Категория записи <span class="text-red-700 text-lg">*</span></label>
          <select type="tarrif" name="tarrif" id="tarrif"
                  class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none">

            <option value="1">V.I.P. 15.000₽ 100%-Успех</option>
            <option selected value="2">1 очередь 10.000₽ 80%-Успех</option>
            <option value="3">2 очередь 5.000₽ 50%-Успех</option>
          </select>
        </div>

        <button id="submit_button"
                class="md:w-64 bg-blue-600 dark:bg-gray-100 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg mt-4 hover:bg-blue-500 dark:hover:bg-gray-200 transition ease-in-out duration-300">
          СОЗДАТЬ ЗАЯВКУ
        </button>
      </form>
    </div>
  </div>
  <!-- ./Appointment Create Form -->
</template>

<script>
import InputAppointmentNumber from "@/components/appointment/inputAppointmentNumber";
import VueDatePicker from "@vuepic/vue-datepicker";
import '@vuepic/vue-datepicker/dist/main.css'
import {mapActions} from "vuex";


export default {
  name: "appointmentCreate",
  components: {InputAppointmentNumber, VueDatePicker},
  data() {
    return {
      formData: {
        username: '',
        phone: '',
        email: '',
        apply_ids: [
          {application_id: '', passport_id: ''},
        ],
        date: '',
      },

    };
  },
  methods: {
    ...mapActions('appointment', ['createAppointment']),
    addApp() {
      this.formData.apply_ids.push({application_id: '', passport_id: ''})
    },
    async createApp() {
      // console.log(this.formdata)
      await this.createAppointment(this.formData)
    },
  },
}
</script>

<style scoped>

</style>


