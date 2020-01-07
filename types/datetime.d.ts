// ------------------------------------------------------------------------------
// name: date
// author: mudas( mschool.tech )
// created: 2019/10/22 21:45
// ------------------------------------------------------------------------------

/**
 * 格式化日期信息为指定格式
 * @param dateInfo 日期数据信息
 * @param [format='YYYY-MM-DD'] 目标格式（默认：'YYYY-MM-DD'，其它：'HH:mm:ss'）
 * @return {string}
 * @overview http://momentjs.cn/docs/#/displaying/
 */
export function dateNormalize(dateInfo, format?:string):string;

/**
 * 将毫秒级转化为相应的时间字符串
 * @param ms 毫秒数（只有在该值满足相应条件时，取按“天>小时>分钟>秒”的优先级显示后缀）
 * @param [extend={ day: '天', hour: '小时', minute: '分钟', second: '秒' }] 配置参数（时间后缀）
 */
export function timestr(ms:number, extend?:object):string;
