<template>
  <section>
    <Form @submit="handleSubmit" :validation-schema="schema">
      <Input name="name" :type="text" title="نام و نام خانوادگی" placeHolder="نام و نام خانوادگی خود را وارد کنید" />
      <Input name="phone_number" :type="text" title="موبایل" placeHolder="موبایل خود را وارد کنید" />
      <button :disabled="totalprice === 0"  type="submit" class="rounded-xl disabled:bg-gray-200 bg-cyan-500 hover:bg-cyan-600 disabled:cursor-not-allowed flex justify-center items-center font-bold md:mt-4 mt-60 text-sm transition-all py-3 text-white w-full">
        ثبت سفارش
        <!-- <span v-else class="animate-spin loading-spinner mx-1" v-for="item in 3" :key="item"></span> -->
      </button>
    </Form>
  </section>
</template>
<script>
import { Form } from 'vee-validate'
import { string, object } from 'yup';
import Input from './Input/Input.vue';
export default {
  components: {
    Form,
    string,
    object,
    Input
  },
  props:{
    totalprice:{
      type:Number,
      required:true
    }
  },
  setup(props, { emit }) {
    const handleSubmit = (val) => {
      emit('handleSubmit', val);
    }
    const schema = {
      name: string().required().label(),
      phone_number: string().required().length(11).label(),
    }
    return {
      handleSubmit,
      schema,
    }
  },
}
</script>
