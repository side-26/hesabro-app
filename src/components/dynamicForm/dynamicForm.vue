<template>
  <section>
    <Form @submit="handleSubmit">
      <slot name="inputs"> </slot>
      <slot name="submitBtn">
        
      </slot>
    </Form>
  </section>
</template>
<script>
import { Form } from 'vee-validate'
export default {
  props: {
    statusCode: {
      type: Number,
      required: true,
    },
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
    return {
      handleSubmit,
    }
  },
}
</script>
