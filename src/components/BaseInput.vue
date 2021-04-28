<template>
  <div>
    <div class="inpoutWrapper">
      <div v-if="type === 'text' ">
        <input :type="type" :placeholder="placeholder" :value="value" @input="$emit('update:value', $event.target.value)" />
      </div>
      <div v-if="type === 'textarea' ">
        <textarea :placeholder="placeholder" :value="value" @input="$emit('update:value', $event.target.value)"></textarea>
      </div>
      <div v-if="type === 'checkbox' ">
        <div class="baseCheckbox" v-for="property in value" :key="property" >
          <input type="checkbox" :id="property" :name="name" :value="property" v-model="selections" @change="handleCheckbox" />
          <label :for="property">{{property}}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    ref,
  } from 'vue';

  export default defineComponent({
    name: 'BaseInput',
    emits: ['update:value', 'update:selections'],
    props:['type', 'placeholder', 'value', 'name' ],
    setup(props,ctx) {
      const inputText = ref(null);
      const selections = ref([]);
      const handleCheckbox = (event: any) => {
        ctx.emit('update:selections', selections);
      }
      return {inputText,handleCheckbox, selections};
    },
  });
</script>
