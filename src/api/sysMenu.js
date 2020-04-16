import request from '@/utils/request'

/* 菜单树查询 */
export function getMenuTree () {
  return request({
    url: '/sysMenu/tree',
    method: 'get'
  })
}

/* 子菜单查询 */
export function getChildrenMenu (params) {
  return request({
    url: '/sysMenu/getChildren?parentId=' + params,
    method: 'get'
  })
}
