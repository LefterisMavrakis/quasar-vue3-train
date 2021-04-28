import {ref} from "vue";

const counter = ref(0);
export default function UseCounter () {

    const increaseCounter = () => {
      counter.value++;
    }
    const decreaseCounter = () => {
      counter.value--;
    }

    return {counter, increaseCounter, decreaseCounter}
}
