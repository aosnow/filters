// ------------------------------------------------------------------------------
// name: currency
// author: mudas( mschool.tech )
// created: 2019/10/25 1:34
// ------------------------------------------------------------------------------

import Currence from 'currency.js';

/**
 * 格式化数字为货币格式
 * @param value
 * @return {string}
 */
export function currency(value) {
  return Currence(value).format();
}
