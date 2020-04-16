import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 50000 // 请求超时时间
})

export default service
