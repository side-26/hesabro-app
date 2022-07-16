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
import {string,object}  from 'yup';
export default {
  components: {
    Form,
    string,
    object
  },
  setup(props, { emit }) {
    const handleSubmit = (val) => {
      emit('handleSubmit', val)
    }
    const schema = {
      name: string().required().label(),
      phone_number:string().required().length(11).label(),
    }
    return {
      handleSubmit,
      schema,
    }
  },
}
</script>
