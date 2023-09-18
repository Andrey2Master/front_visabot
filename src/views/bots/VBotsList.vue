<template>
  <div class="flex flex-wrap justify-center gap-4 p-2 rounded-lg bg-white">
    <div>Выберите бота</div>

  </div>
  <div class="flex flex-wrap justify-start gap-4 p-4">
    <v-bot-item
        v-for="bot in botsList"
        :key="bot.id"
        :name="bot.name"
        :category="bot.category"
        @bot-select ="botSelect(bot.name)"
    />
  </div>
</template>

<script>
import VBotItem from "@/views/bots/VBotItem";
import {mapMutations, mapState} from "vuex";

export default {
  name: "VBotsList",
  components: {VBotItem},
  mounted() {
  },
  methods:{
    ...mapMutations('bots',['setCurBot']),
    botSelect(curBot){
      this.setCurBot(curBot)
      this.$router.push('/appointment');
    },
  },
  computed: {
    ...mapState('bots',['botsList']),

  }
}
</script>

<style scoped>

</style>
