// ------------------------------------------------------------------------------
// name: distance
// author: mudas( mschool.tech )
// created: 2019/10/28 17:52
// ------------------------------------------------------------------------------

/**
 * 格式化距离字段带单位输出
 * <p>小于1000时单位为'm'，大于1000时单位为'km'</p>
 * @param value
 * @param fixed 保留小数位数
 * @return {string}
 */
export function distance(value, fixed = 1) {
  return value < 1000 ? `${value >> 0}m` : `${(value * 0.001).toFixed(fixed)}km`;
}
