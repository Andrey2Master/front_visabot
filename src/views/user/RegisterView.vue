<template>
  <div class="fixed top-0 left-0 flex h-full w-full flex-col justify-center overflow-hidden py-6 z-50">
    <div @submit.prevent="submit"
         class="relative mx-auto rounded-xl bg-white px-6 pt-4 pb-4 shadow-xl ring-1 ring-gray-500/5">
      <div v-if="isPassError" class="text-red-500 font-weight-bold">
        Не совпадают пароли
      </div>
      <div class="flex flex-col m-2 form-group">
        <label for="application_id" class="hidden">Number</label>
        <input type="text"
               v-model="user.username"
               placeholder="Имя пользователя"
               class="w-100 mt-1 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"/>
      </div>
      <div class="flex flex-col m-2 form-group">
        <label for="application_id" class="hidden">Number</label>
        <input type="text"
               v-model="user.password"
               placeholder="Пароль"
               class="w-100 mt-1 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"/>
      </div>
      <div class="flex flex-col m-2 form-group">
        <label for="application_id" class="hidden">Number</label>
        <input type="text"
               v-model="user.password_2"
               placeholder="Повторить пароль"
               class="w-100 mt-1 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none"/>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2">
        <button id="submit_button"
                class="md:w-64 bg-blue-600 dark:bg-gray-100 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg m-2 hover:bg-blue-500 dark:hover:bg-gray-200 transition ease-in-out duration-300">
          ВОЙТИ
        </button>
        <button @click="doRegister"
                class="md:w-64 bg-blue-600 dark:bg-gray-100 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg m-2 hover:bg-blue-500 dark:hover:bg-gray-200 transition ease-in-out duration-300">
          ЗАРЕГИСТИРОВАТЬСЯ
        </button>
      </div>

    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "v-register",
  data() {
    return {
      user: {
        username: '',
        password: '',
        password_2: '',
      },
      isPassError: false,
    }
  },
  methods: {
    ...mapActions('user',['register']),
    async doRegister() {
      this.isPassError = this.user.password !== this.user.password_2
      delete this.user.password_2
      await this.register(this.user)
    }
  }
}
</script>

<style scoped>

</style>
