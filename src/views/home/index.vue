<script  setup>
import { useCounterStore } from '@/stores/counter';
const counter = useCounterStore()

const reduce =()=>{
  counter.decrement()
}

const add =()=>{
  counter.increment()
}
</script>

<template>
  <div>系统首页</div>
  <button @click="reduce">-10</button>
  {{ counter.count }}--{{ counter.doubleCount}}
  <button @click="add">+10</button>
</template>