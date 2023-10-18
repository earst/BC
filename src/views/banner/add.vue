<template>
  <div>
    <!-- 输入框，用于输入alt属性值 -->
    <el-input type="text" placeholder="alt" v-model="alt"></el-input>
    <br/>
    <!-- 输入框，用于输入link属性值 -->
    <el-input type="text" placeholder="link" v-model="link"></el-input>
    <br/>
    <!-- 文件上传组件 -->
    <el-upload
      :on-change="selectImg"
      :auto-upload="false"
    >
      <!-- 触发文件选择的按钮 -->
      <el-button slot="trigger" size="small" type="primary">选择文件</el-button>
      <!-- 文件列表展示区域 -->
      <el-upload-list></el-upload-list>
    </el-upload>
    <br/>
    <!-- 只读输入框，用于展示选中的图片文件路径 -->
    <el-input readonly placeholder="img" v-model="img"></el-input>
    <br/>
    <!-- 展示选中的图片 -->
    <img :src="img" /><br/>

    <!-- 点击按钮执行上传操作 -->
    <el-button @click="uploadImg">上传</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { addBanner } from '@/api/banner';
import { useRouter } from 'vue-router';

// 定义响应式变量
const alt = ref(''); // alt属性的值
const link = ref(''); // link属性的值
const img = ref(''); // 选中的图片文件路径


// 文件选择回调函数 file参数是用户选择的文件对象，
const selectImg = (file) => {
  console.log(file);
    //文件读取器读取文件
  const reader = new FileReader();
  reader.readAsDataURL(file.raw); // 将文件转换为base64格式进行读取（异步操作）
    //在selectImg函数中，FileReader对象通过调用readAsDataURL方法将文件转换为Base64格式进行读取。读取完成后，onload事件被触发，此时this.result表示文件读取的结果，即文件内容的Base64字符串。
  reader.onload = function () {
    console.log(this.result);
    img.value = this.result; // 将读取到的base64数据赋值给img变量
  };
};

// 创建router实例
const router = useRouter();

// 执行上传操作
const uploadImg = () => {
  // 调用addBanner方法上传图片，并传递img、alt、link参数
  addBanner({ img: img.value, alt: alt.value, link: link.value }).then(() => {
    router.back(); // 上传成功后返回上一页
  });
};
</script>