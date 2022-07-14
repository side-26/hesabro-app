<template>
  <section>
    <Form @submit="handleSubmit" :validation-schema="schema">
      <slot name="inputs"> </slot>
      <slot name="submitBtn"> </slot>
    </Form>
  </section>
</template>
<script>
import { Form } from 'vee-validate'
import * as yup from 'yup'
export default {
  props: {
    modulesArr: {
      type: Array,
      required: true,
    },
  },
  components: {
    Form,
  },
  setup(props, { emit }) {
    const handleSubmit = (val) => {
      emit('handleSubmit', val)
    }
    const schema = {
      name(val) {
        if (!val) return 'فیلد مورد نظر خالی است!!'
        else if (val.length < 2) return 'نام و نام خانوادگی خود را کامل وارد کنید!!'
        return true
      },
      phone_number(val) {
        if (!val) return 'فیلد مورد نظر خالی است!!!'
        else if (val[0] !== '0' || val.length != 11) return 'شماره تلفن معتبر نمی باشد!!'
        else if (isNaN(val)) return 'شماره تلفن باید عدد باشد!!!'
        return true
      },
    }
    return {
      handleSubmit,
      schema,
    }
  },
}
</script>
