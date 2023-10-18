// src/utils/get-routes.js

export function getRoutes (menuList) {
    const arr = []
    menuList.forEach((item) => {
      let obj = {
        id: '',
        label: ''
      }
      if (item.meta) {
        if (item.children) { // 动态那些数据
          obj = {
            id: item.path,
            label: (item.meta.title),
            children: getRoutes(item.children)
          }
        } else {
          obj = {
            id: item.path,
            label: (item.meta.title)
          }
        }
      } else {
           // 如果item没有meta属性，即没有动态数据，判断是否有children属性
        if (item.children) { // 系统首页
             // 如果有children属性，则创建一个新的obj对象，包括id和label属性，值分别为children数组的第一个元素的path和meta.title
          obj = {
            id: item.children[0].path,
            label: (item.children[0].meta.title)
          }
        }
      }
     
      obj.id !== '' && arr.push(obj)
    });
    return arr
  }
  
  // getRoutes(menuList)