// ------------------------------------------------------------------------------
// name: currency
// author: mudas( mschool.tech )
// created: 2019/10/25 1:34
// ------------------------------------------------------------------------------

/**
 * 格式化数字为货币格式
 * @param {number|string} value 原始数据
 * @param {boolean} [removeTrailingZeros=false] 是否删除末尾补位的0，如“￥5.00”会得到“￥5”
 * @return {string}
 */
export function currency(value:number | string, removeTrailingZeros?:boolean):string;
