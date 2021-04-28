<template>
  <div class="formWrapper">
    <form @submit.prevent="$emit('update:formData', Object.entries(formElements).map(entry => {
        return {[entry[0]]: entry[1].selections ? entry[1].selections : entry[1].value}
      }))">
      <BaseInput v-for="(input, index) in formElements"
                 :key="index"
                 :type="input.type"
                 :placeholder="input.placeholder"
                 v-model:value="input.value"
                 v-model:selections="input.selections">

      </BaseInput>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    ref,
  } from 'vue';
  import BaseInput from "components/BaseInput.vue";

  export default defineComponent({
    name: 'BaseForm',
    components:{BaseInput},
    props:['formElements', 'formData'],
    emits:['update:formData'],
    setup(props,ctx) {
      return {};
    },
  });
</script>
