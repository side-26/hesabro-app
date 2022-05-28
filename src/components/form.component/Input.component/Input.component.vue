<template lang="">
    <div class="flex-col flex mb-3">
        <label class="font-IranYecan-medium text-xs mb-3 text-gray-700"  >{{title}}</label>
        <Field class="bg-gray-200 text-sm text-gray-800 font-IranYecan-bold py-2 pr-1 rounded-lg placeholder:font-IranYecan-bold placeholder:text-xs"  :name="name"  :type="type" :rules="validateFu" :placeholder="placeHolder"/>
        <ErrorMessage class="text-xs font-IranYecan-bold text-red-600 mt-2"  :name="name" />
    </div>
</template>
<script>
import {  Field,ErrorMessage  } from 'vee-validate';

props:[""]
export default {
    components: {
    Field,
    ErrorMessage
  },
    name:"InputCo",
    props:["name","title","placeHolder","validateFu"]
}
</script>
