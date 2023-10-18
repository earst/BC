<!-- src/views/banner/components/home.vue -->
<script  setup>
  import { ref, onMounted } from 'vue';
  import { getSearchList, updateRecommendFlag, updateSeckillFlag, updateSaleFlag} from '@/api/pro'

  // 将展示数据adminList 变为了 计算属性的数据
  // 将依据原始数据 originalList 以及 页码currentPage  和每页显示个数pageSize 一起计算出来显示的数据adminList
  // const adminList = ref([])
  const currentPage = ref(1)
  const pageSize = ref(10)
  const searchList = ref([])
  const changeCurrentPage = (val) => { // 页码改变函数
    currentPage.value = val
  }
  const changeSize = (val) => { // 每页显示个数改变的函数
    pageSize.value = val
  }

  const category =ref('')
  const search =ref('')
  const getSearchListData = () => {
    getSearchList({ category: category.value, search: search.value}).then(res => {
      console.log(res.data.data)
      searchList.value = res.data.data
    })
  }
  onMounted(() => {
    getSearchListData()
  })

  const updateRecommendFlagFn = (item) => {
    console.log(item)
    updateRecommendFlag({ proid: item.proid, flag: item.isrecommend === 1 ? false : true}).then(() => {
      getSearchListData()
    })
  }
  const updateSeckillFlagFn = (item) => {
    updateSeckillFlag({ proid: item.proid, flag: item.isseckill === 1 ? false : true}).then(() => {
      getSearchListData()
    })
  }

  const updateSaleFlagFn = (item) => {
    updateSaleFlag({ proid: item.proid, flag: item.issale === 1 ? false : true}).then(() => {
      getSearchListData()
    })
  }

  const searchFn =()=>{
    getSearchList({ category: category.value, search: search.value}).then(res => {
      console.log(res.data.data)
      searchList.value = res.data.data
    })
  }
</script>

<template>
  <el-input v-model="search"/>
  <el-button type="primary" @click="searchFn">搜索</el-button> 
  <el-table :data="searchList" style="width: 100%">
    <el-table-column label="序号">
      <template #default="scope">
        <!-- scope.$index 代表索引值 -->
        <span>{{ (currentPage - 1) * pageSize + scope.$index + 1 }}</span>
      </template>
    </el-table-column>
    
    <el-table-column prop="proname" label="产品名称" width="120" />
    <el-table-column prop="img1" label="图片" width="120" >
      <template #default="scope">
        <!-- scope.row 代表一条数据 -->
        <img :src="scope.row.img1" style="height: 60px"/>
      </template>
    </el-table-column>
    <el-table-column prop="originprice" label="价格" width="80" />
    <el-table-column prop="category" label="分类" width="80" />
    <el-table-column prop="brand" label="品牌" width="80" />
    <el-table-column prop="isrecommend" label="是否推荐" width="120" >
      <template #default="scope">
        <!-- scope.row 代表一条数据 -->
        <el-switch :model-value="scope.row.isrecommend===1" @change="updateRecommendFlagFn(scope.row)" />
      </template>
    </el-table-column>
    <el-table-column prop="isseckill" label="是否秒杀" width="180"  >
      <template #default="scope">
        <!-- scope.row 代表一条数据 -->
        <el-switch :model-value="scope.row.isseckill===1" @change="updateSeckillFlagFn(scope.row)" />
      </template>
    </el-table-column>
    <el-table-column prop="issale" label="是否售卖" width="180" >
      <template #default="scope">
        <!-- scope.row 代表一条数据 -->
        <el-switch :model-value="scope.row.issale===1" @change="updateSaleFlagFn(scope.row)" />
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="scope">
        <el-popconfirm title="确定删除吗?">
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
    :total="searchList.length" 
    @current-change="changeCurrentPage"
    @size-change="changeSize"
    />
    
</template>
