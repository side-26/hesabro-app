<template>
  <div class="flex-col flex mb-3">
    <label class="font-medium text-xs mb-3 text-gray-700">{{ title }}</label>
    <Field @change="handleShowFarsi($event)" class="bg-gray-200 text-sm text-gray-800 font-bold h-12 pr-1 rounded-xl placeholder:font-bold placeholder:text-xs placeholder:pr-1" :name="name" :type="type" :placeholder="placeHolder" />
    <ErrorMessage class="text-xs font-bold text-red-600 mt-2" :name="name" />
  </div>
</template>
<script>
import { Field, ErrorMessage } from 'vee-validate'
import { toFarsiNumber } from '@/utilities/ConvertToPersian'

export default {
  components: {
    Field,
    ErrorMessage,
  },
  name: 'TextInput',
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    placeHolder: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const handleShowFarsi = (evt) => {
      evt.target.value = toFarsiNumber(evt.target.value)
    }
    return {
      toFarsiNumber,
      handleShowFarsi,
    }
  },
}
</script>
