<!-- src/views/banner/components/home.vue -->
<script  setup>
  import { ref, onMounted } from 'vue';
  import { getBannerList,deleteBanner } from '@/api/banner'
  import { useRouter } from 'vue-router';

  // 将展示数据adminList 变为了 计算属性的数据
  // 将依据原始数据 originalList 以及 页码currentPage  和每页显示个数pageSize 一起计算出来显示的数据adminList
  // const adminList = ref([])
  const currentPage = ref(1)
  const pageSize = ref(10)
  const bannerList = ref([])
  const changeCurrentPage = (val) => { // 页码改变函数
    currentPage.value = val
  }
  const changeSize = (val) => { // 每页显示个数改变的函数
    pageSize.value = val
  }

  
  const getBannerListData = () => {
    getBannerList().then(res => {
      console.log(res.data.data)
      bannerList.value = res.data.data
    })
  }
  onMounted(() => {
    getBannerListData()
  })
  const removeItem = (bannerid) => {
    deleteBanner({bannerid}).then(()=>{
      getBannerListData()
    })
  }
  const router = useRouter()
  const toAdd = () => {
    router.push('/banner/add')
  }
 
</script>

<template>
  <el-button type="primary" @click="toAdd">添加轮播图</el-button>
  <el-table :data="bannerList" style="width: 100%">
    <el-table-column label="序号">
      <template #default="scope">
        <!-- scope.$index 代表索引值 -->
        <span>{{ (currentPage - 1) * pageSize + scope.$index + 1 }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="img" label="图片" width="180" >
      <template #default="scope">
        <!-- scope.row 代表一条数据 -->
        <img :src="scope.row.img" style="height: 60px"/>
      </template>
    </el-table-column>
    <el-table-column prop="alt" label="alt" width="180" />
    <el-table-column prop="link" label="link" width="180" />
    
    <el-table-column label="操作">
      <template #default="scope">
        <el-popconfirm title="确定删除吗?" @confirm="removeItem(scope.row.bannerid)">
          <template #reference>
            <el-button
              size="small"
              type="danger"
              >删除</el-button
            >
          </template>
        </el-popconfirm>
        
      </template>
    </el-table-column>
  </el-table>
  <el-pagination 
    background 
    layout="sizes, prev, pager, next" 
    :page-sizes="[5, 10, 20, 30]"
    :total="bannerList.length" 
    @current-change="changeCurrentPage"
    @size-change="changeSize"
    />
    
</template>