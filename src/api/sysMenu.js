import request from '@/utils/request'

/* 菜单树查询 */
export function getMenuTree () {
  return request({
    url: '/sys-menu/tree',
    method: 'get'
  })
}

/* 子菜单查询 */
export function getChildrenMenu (params) {
  return request({
    url: '/sys-menu/getChildren?parentId=' + params,
    method: 'get'
  })
}
