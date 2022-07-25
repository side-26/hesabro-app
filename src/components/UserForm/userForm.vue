<template>
  <section>
    <Form @submit="handleSubmit" :validation-schema="schema">
      <Input name="name" :type="text" title="نام و نام خانوادگی" placeHolder="نام و نام خانوادگی خود را وارد کنید" />
      <Input name="phone_number" :type="text" title="موبایل" placeHolder="موبایل خود را وارد کنید" />
      <Button  :disabled="submitLoading" type="submit" class="rounded-xl disabled:bg-gray-200 bg-cyan-500 hover:bg-cyan-600 disabled:cursor-not-allowed flex justify-center items-center font-bold text-sm transition-all">
        ثبت
        <!-- <span v-else class="animate-spin loading-spinner mx-1" v-for="item in 3" :key="item"></span> -->
      </Button>
    </Form>
  </section>
</template>
<script>
import { Form } from 'vee-validate';
import  '@/config/yup.confing'
import { string, object } from 'yup';
import Input from './Input/Input.vue';
import Button from '../button/Button.vue'
export default {
  components: {
    Form,
    string,
    object,
    Input,
    Button
  },
  props:{
    submitLoading:{
      type:Boolean,
      required:true
    }
  },
  setup(props, { emit }) {
    const handleSubmit = (val) => {
      emit('handleSubmit', val);
    }
    const phoneRegex = new RegExp('^(09)\\d{9}$');
    const schema = {
      name: string().required().label(),
      phone_number: string().matches(phoneRegex, 'شماره تلفن معتبر نمی باشد').required().label(),
    }
    return {
      handleSubmit,
      schema,
    }
  },
}
</script>
