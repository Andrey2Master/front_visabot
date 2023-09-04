<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      selected: true,
    }
  },

  components: {
    // MyCount
  }
  ,
  methods: {
    getCount(event) {
      console.log(event.count)
    }
  }
  ,
  computed: {
    layout() {
      return this.$route.valueOf().meta.layout
    }
  }
  ,

}
</script>
