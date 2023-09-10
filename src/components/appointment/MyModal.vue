<template>
  <template v-if="isShow">
    <div
        @click="hideDialog"
        class="absolute w-full h-full bg-gray-900 opacity-50 modal-overlay z-20"
    ></div>

    <div class="fixed top-0 left-0 flex h-full w-full flex-col justify-center overflow-hidden py-6 z-50">
      <div class="relative mx-auto rounded-xl bg-white px-6 pt-4 pb-4 shadow-xl ring-1 ring-gray-500/5">
        <div class="flex justify-between border-b-2 border-black pb-2">

          <!--        <slot name="header"></slot>-->
          <div class="font-extrabold">{{ title }}</div>

          <svg @click="hideDialog" class="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24"
               stroke-width="2"
               stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </div>
        <slot></slot>
      </div>
    </div>
  </template>
</template>

<script>
// import modalMixin from "@/mixins/modalMixin";

export default {
  name: "MyModal",
  data() {
    return {
      isShow: this.show,
    }
  },
  props: {
    title: String,
    show: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:show'],
  methods: {
    hideDialog() {
      this.isShow = false
    }
  },
}
</script>
