<template>
  <div id="app">
    <el-page-header title="返回" content="测试"></el-page-header>
    字符：
    <el-input v-model="value"></el-input>
    <el-alert>{{repeatValue}}</el-alert>

    货币：
    <el-input v-model="money"></el-input>
    <el-alert>
      <div>原始值：{{currency(money)}}</div>
      <div>去除末尾0：{{currency(money,true)}}</div>
      <div>有符号：{{currency(money,false,true)}}</div>
      <div>无符号：{{currency(money,true,false)}}</div>
    </el-alert>

    日期时间：
    <el-alert>格式化日期（YYYY-MM-DD）：{{dateformat(new Date())}}</el-alert>
    <el-alert>格式化时间：{{timestr(date)}}</el-alert>
  </div>
</template>

<script>
import { repeat, trim, currency, dateformat, timestr } from '@mudas/filters';

export default {
  name: 'app',
  mixins: [],
  data() {
    return {
      value: 'abc',
      date: 86400000,
      money: 10.50
    };
  },
  computed: {
    repeatValue() {
      return repeat(trim(this.value), 3);
    }
  },

  methods: {
    currency,
    dateformat,
    timestr
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 50px;
}

.el-form {
  width: 50%;
  min-width: 200px;
  max-width: 500px;
}
</style>
