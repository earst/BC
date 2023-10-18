import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//组合式Api中定义状态管理器
export const useAdminStore = defineStore('admin', () => {
  const adminname = ref(localStorage.getItem("adminname"||""))
  const token = ref(localStorage.getItem("token"||""))

const changAdminname =(val)=>{
  adminname.value =val
}
const changToken =(val)=>{
  token .value =val
}
  return { adminname, token, changAdminname,changToken}
})
