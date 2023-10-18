import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//组合式Api中定义状态管理器
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value+=10
  }
  function decrement(){
    count.value-=10
  }

  return { count, doubleCount, increment,decrement }
})
