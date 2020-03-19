// ------------------------------------------------------------------------------
// name: currency
// author: mudas( mschool.tech )
// created: 2019/10/25 1:34
// ------------------------------------------------------------------------------

import Currence from 'currency.js';
import { INS } from './global';

/**
 * 格式化数字为货币格式
 * @param {number|string} value 原始数据
 * @param {boolean} [removeTrailingZeros=false] 是否删除末尾补位的0，如“￥5.00”会得到“￥5”
 * @param {boolean} [withSymbol=false] 传递给 currence 的参数（实现国际化的重要接口）
 * @return {string}
 */
export function currency(value, removeTrailingZeros = false, withSymbol = false) {
  const option = withSymbol ? { symbol: INS.transform('currency'), formatWithSymbol: true } : {};
  let result = Currence(value, option).format();
  if (removeTrailingZeros) result = result.replace(/\.?0{1,2}$/g, '');
  return result;
}
