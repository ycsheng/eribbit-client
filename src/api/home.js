// 提供首页品牌展示相关的API函数
import request from "@/utils/request";

/**
 * @param {Integer} limit 品牌个数
 * @returns Promise
 */
export const findBrand = (limit = 6) => {
  return request('home/brand', 'get', {limit})
}

/**
 * 获取广告区轮播图
 * @returns Promise
 */
export const findBanner = () => {
  return request('home/banner', 'get')
}

/**
 * 获取新鲜好物面板内容
 * @returns Promise
 */
export const findNew = () => {
  return request('home/new', 'get')
}

/**
 * 获取人气推荐面板内容
 * @returns Promise
 */
export const findHot = () => {
  return request('home/hot', 'get')
}

/**
 * 获取商品板块内容
 * @returns Promise
 */
export const findGoods = () => {
  return request('home/goods', 'get')
}

