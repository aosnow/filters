// ------------------------------------------------------------------------------
// name: global
// author: mudas( mschool.tech )
// created: 2020/3/19 16:10
// ------------------------------------------------------------------------------

import Locale from './locale';
import zhCN from './locale/zh-CN';
import en from './locale/en';

const INS = new Locale();
INS.setLanguages({
  'zh-CN': zhCN,
  en: en
});

export { INS };
