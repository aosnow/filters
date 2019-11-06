# @mudas/filters
> A library project for filters

## Setup
install:
```npm
npm i @mudas/filters -S
```
setup:
```js
import {currency} from '@mudas/filters';
Vue.filter('currency', currency);
````
usage:
```html
<template>
  <div>{{value|currency}}</div>
</template>
```

## Filters List
scope|function|desc
---|---|---
Currency|currency(value:number)|Convert to currency format，e.g. '100,00.01' 
Datetime|dateNormalize(dateInfo:*, format:string = 'YYYY-MM-DD')|Convert to date format
Datetime|timestr(ms:number, extend:object = { day: '天', hour: '小时', minute: '分钟', second: '秒' })|Convert to time format
physical|distance(value, fixed = 1)|Formatted distance field with unit output, The unit is 'm' when it is less than 1000, and the unit is 'km' when it is more than 1000.
String|repeat,trim|Alias of repeat,trim in lodash



