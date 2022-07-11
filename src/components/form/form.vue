<template lang="">
  <section class="lg:w-2/3 md:w-4/5 w-full mt-3 md:mt-0 md:mr-auto px-3">
    <Form @submit="handleSubmit">
      <slot> </slot>
      <div>
        <button :disabled="modulesArr===0" :class="{'bg-gray-100 cursor-not-allowed':modulesArr===0,'bg-cyan-500 hover:bg-cyan-600':modulesArr!==0}" type="submit" class="rounded-xl flex justify-center items-center font-bold md:mt-4 mt-60 text-sm   transition-all py-3 text-white w-full">
          <span v-if="statusCode == 0">ثبت سفارش</span>
          <span v-else class="animate-spin loading-spinner mx-1" v-for="item in 3" :key="item"></span>
        </button>
      </div>
    </Form>
  </section>
</template>
<script>
import { Form, Field } from 'vee-validate'
export default {
  name: 'FormCo',
  methods: {
    handleSubmit(val) {
      this.$emit('handlePost', val)
    },
  },
  props: {
    statusCode: {
      type: Number,
      required: true,
    },
    modulesArr:{
      type:Array,
      required:true
    }
  },
  components: {
    Form,
  },
}
</script>
