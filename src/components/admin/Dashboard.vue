<template>
<div>CONTENT</div>
</template>

<script>
import { mapState } from 'vuex'


export default {
  name: 'MyDashboard',
  data(){
    return{
    }
  },

  computed: {
    ...mapState('admin',["sideBarOpen"]),
    layout(){
      return this.$route.valueOf().meta.layout
    }
   },
  components: {

  },

}
</script>
