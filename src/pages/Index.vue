<template>
  <q-page class="row items-center justify-evenly">
<!--    <example-component-->
<!--      title="Example component"-->
<!--      active-->
<!--      :todos="todos"-->
<!--      :meta="meta"-->
<!--    ></example-component>-->
    <div class="counterWrapper">
      {{counter}}
      <button @click="increaseCounter()">Increase</button>
    </div>
    <BaseForm :formElements="formElements" v-model:formData="formData" />
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/CompositionComponent.vue';
import { defineComponent, ref } from 'vue';
import UseCounter from "src/composables/counter";
import BaseInput from 'components/BaseInput.vue';
import BaseForm from "components/BaseForm.vue";


export default defineComponent({
  name: 'PageIndex',
  components: { ExampleComponent, BaseInput, BaseForm },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ]);
    const meta = ref<Meta>({
      totalCount: 1200
    });
    const {counter, increaseCounter} = UseCounter();
    const parentText = ref(null);
    const parentText2= ref(null);
    const formElements = ref({
      name: {
        type: 'text',
        placeholder: 'Enter your name',
        value:null
      },
      surname: {
        type: 'text',
        placeholder: 'Enter your surname',
        value:null
      },
      email: {
        type: 'text',
        placeholder: 'Enter your email',
        value:null
      },
      message: {
        type: 'textarea',
        placeholder: 'Enter your message',
        value:null
      },
      preferences: {
        type: 'checkbox',
        name: 'preferences',
        value: ['AEK','PAOK', 'IRAKLIS'],
        selections:[]
      }
    });
    const formData = ref(null);


    return { todos, meta, counter, increaseCounter, parentText, parentText2, formElements, formData };
  }
});
</script>
