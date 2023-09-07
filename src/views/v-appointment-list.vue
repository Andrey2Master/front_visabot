<template>
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
  methods: {},
  mounted() {
  },
  created() {
    store.dispatch('appointment/getAppointmentFromApi', 'MOW2')
  },

  computed: {
    ...mapState('appointment', ['appointmentData', 'catalogTitle']),
    ...mapGetters('appointment', ['totalAppointment'])

  },
}
</script>

<style scoped>

</style>
