// src/utils/get-page-title.js
import defaultSettings from '../settings'

const title = defaultSettings.title || '嗨购后台管理系统'

// 系统首页 - 嗨购后台管理系统
// 添加轮播图 - 嗨购后台管理系统
export default function getPageTitle (pageTitle) {
  if (pageTitle) {
    // 当前页面标识 + 应用的标题
    return `${ pageTitle } - ${ title }`
  } else {
    return `${ title }`
  }
}