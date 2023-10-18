<script setup>
import {computed} from "vue"
import logo from "@/assets/logo.svg"
import settings from "@/settings"

const title =computed(()=>settings.title)

const props = defineProps({
    collapse:{
        type:Boolean
    }
})
</script>

<template>
     <div class="logo">
        <el-image style="width: 40px; height: 40px" :src="logo" fit="fill" />
        <span v-if="!collapse">{{ title  }}</span>
     </div>
</template>


<style lang="scss">

.logo{
    width: 100%;
    height: 60px;
    overflow: hidden;
    padding: 10px;
    color: #fff;
    display: flex;
    align-items: center;

}
</style>