<template lang="">
    <div class="flex-col flex mb-3">
        <label class="font-IranYecan-medium text-xs mb-3 text-gray-700"  >{{title}}</label>
        <input class="bg-gray-200 py-2 pr-1 rounded-lg placeholder:font-IranYecan-bold placeholder:text-xs " id="input" :type="type" :placeholder="placeHolder">
    </div>
</template>
<script>
export default {
    name:"InputCo",
    props:["title","placeHolder"]
}
</script>
