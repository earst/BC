// src/utils/get-menu-list.js
export function getMenuList (menus, checkedkeys) {
    if (checkedkeys.length === 0) { // 如果没有设置权限，那么即将拥有所有的权限
      checkedkeys = ['/home', '/banner', '/banner/list', '/banner/list/home', '/banner/list/kind', '/banner/add', '/pro', '/pro/list', '/pro/search', '/account', '/account/user', '/account/admin']
    }
    let result = getResult(menus)
  
    function getResult(menus) {
      let arr= []
      menus.forEach(item => {
        if (item.meta) {
          if (checkedkeys.includes(item.path)) {
            arr.push({...item})
            
            if (item.children) {
              arr[arr.length - 1].children = getResult(item.children)
            }
          }
        } else { // 系统首页
          arr.push(item)
        }
      });
      return arr 
    }
    return result
  } 
  