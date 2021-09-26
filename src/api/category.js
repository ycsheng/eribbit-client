// 定义分类相关的API接口函数

// 定义首页需要的接口函数
import request from '@/utils/request'

/**
 * 获取首页头部分类数据
 * 获取所有分类(顶级，二级，对应的商品推荐数据)
 * @returns Promise
 */
export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}