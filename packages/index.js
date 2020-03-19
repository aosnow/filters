// ------------------------------------------------------------------------------
// name: index
// author: 喵大斯( mschool.tech )
// created: 2019/6/26 21:04
// ------------------------------------------------------------------------------

import moment from 'moment';
import { INS } from './global';

export * from './currency';
export * from './datetime';
export * from './distance';
export * from './string';

/**
 * 设置语言
 * @param {string} lang
 */
export function locale(lang) {
  INS.setLang(lang);
  moment.updateLocale(lang);
}

locale('zh-CN');
