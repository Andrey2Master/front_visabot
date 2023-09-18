<template>
  <div class="flex flex-wrap justify-between gap-4 p-2 rounded-lg bg-white">
    <div>{{ currentBot }}</div>

  </div>
  <div class="flex flex-wrap justify-evenly gap-4 p-4">
    <v-appointment-item
        v-for="(appointment, index) in appointmentData"
        :appointment="appointment"
        :key="index"
    />
  </div>


</template>

<script>
import VAppointmentItem from "@/components/appointment/v-appointment-item";
import {mapGetters, mapState} from "vuex";
import store from "@/store";

export default {
  name: "v-appointment-list",
  components: {VAppointmentItem},
  data() {
    return {}
  },
  created() {
    console.log(this.$route.params)
    store.dispatch('appointment/getAppointments', store.getters.curCity)
  },

  computed: {
    ...mapState('appointment', ['appointmentData', 'catalogTitle']),
    ...mapGetters('appointment', ['totalAppointment']),
    ...mapState('bots', ['currentBot']),


  },
}
</script>

<style scoped>

</style>
