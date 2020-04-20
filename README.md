# @mudas/filters
> A library project for filters

## Setup
install:
```npm
npm i @mudas/filters -S
```

You need to add configuration for vue-cli to correctly translate the es module in node_modules:
```js
// vue.config.js:
module.exports = {
    transpileDependencies: [
      '@mudas/*' // all of node_module for '@mudas'
    ]
}
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
Datetime|dateformat(dateInfo:*, format:string = 'YYYY-MM-DD')|Convert to date format
Datetime|timestr(ms:number)|Convert to time format
physical|distance(value, fixed = 1)|Formatted distance field with unit output, The unit is 'm' when it is less than 1000, and the unit is 'km' when it is more than 1000.
String|repeat,trim|Alias of repeat,trim in lodash



