<script  setup>
import { computed, ref } from 'vue';
import { ElMessage } from 'element-plus'
import { useRouter } from "vue-router"
import{useAdminStore} from "@/stores/admins"
const adminname = ref('admin')
const password = ref('123456')
import { adminLogin } from "@/api/admin"
const flag = computed(() => {
  return adminname.value === '' || password.value === ''
})
const admin =useAdminStore()
const router = useRouter()
const login = () => {
  adminLogin({
    adminname: adminname.value,
    password: password.value
  }).then(res => {
    console.log(res)
    if (res.data.code === "10005") {
      console.log("账户未注册")
      ElMessage.error('账户未注册')
    } else if (res.data.code === "10003") {
      console.log("密码错误")
      ElMessage.error('密码错误')
    } else {
      console.log("登录成功")
      ElMessage.success('登录成功')
      // 将登陆信息保存到本地
      localStorage.setItem('adminname', res.data.data.adminname)
      localStorage.setItem('checkedkeys', res.data.data.checkedkeys)
      localStorage.setItem('role', res.data.data.role)
      localStorage.setItem('token', res.data.data.token)

      //将信息存入状态管理器
      admin.changAdminname(res.data.data.adminname)
      admin.changToken( res.data.data.token)
      router.replace("/")
    }
  })
}
</script>

<template>
  <div class="loginBox">
    <div class="loginFrom">
      <div class="loginTitle">系统首页</div>
      <div class="loginInput">
        <el-input v-model="adminname" placeholder="账户名" prefix-icon="User" clearable />
      </div>
      <div class="loginInput">
        <el-input v-model="password" type="password" placeholder="密码" prefix-icon="Lock" show-password clearable />
      </div>
      <el-button type="primary" class="loginBtn" :disabled="flag" @click="login">登录</el-button>
      <span style="color: aliceblue;"> 默认账户名:admin 默认密码:123456 </span>
    </div>
  </div>
</template>

<style lang="scss">
.loginBox {
  width: 100%;
  height: 100%;
  background-color: #2b2b2b;
  display: flex;
  justify-content: center;
  align-items: center;

  .loginFrom {
    width: 500px;
    min-height: 300px;

    .loginTitle {
      text-align: center;
      font-size: 24px;
      color: #fff;
      font-weight: bold;
    }

    .loginInput {
      margin: 20px 0;

      .el-input {
        height: 40px;

        .el-input__wrapper {
          background-color: #2b2b2b;

          .el-input__inner {
            background-color: #2b2b2b;
          }
        }
      }
    }

    .loginBtn {
      width: 100%;
      height: 40px;
      margin-bottom: 20px;
    }
  }
}</style>