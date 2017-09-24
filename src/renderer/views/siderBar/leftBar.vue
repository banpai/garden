<template>
  <div class="left-bar"> 
    <Menu :theme="theme2" active-name="1-2" :open-names="['1','2']" class="left-menu" style="width: 100%;">
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-paper"></Icon>
                代码管理
            </template>
            <MenuItem name="1-1">搜索管理</MenuItem>
            <MenuItem name="1-2">增加代码</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                项目管理
            </template>
            <MenuItem  v-for="item in progressData" v-bind:name="item.name">{{ item.title }}</MenuItem>
        </Submenu>
    </Menu>
   </div>
</template>
<script>
  export default {
    data () {
      const low = require('lowdb')
      const FileSync = require('lowdb/adapters/FileSync')
      const adapter = new FileSync('db.json')
      const db = low(adapter)
      // setsome defaults
      // db.defaults({ progressData: [{ title: '小程序', name: '2-1', id: '1' }] })
      //   .write()

      // Add a post
      // db.get('progressData')
      //    .push({ title: 'Egret', name: '2-3', id: '3' })
      //    .write()

      // remove a post
      // db.get('progressData').remove({ title: '小程序' }).write()

      // // Set a user using Lodash shorthand syntax
      // db.set('user.name', 'typicode')
      //   .write()
      var progressData = db.get('progressData').value()
      console.log(progressData)
      return {
        progressData: progressData
      }
    },
    init: function () {
      console.log('d')
    }
  }
</script>
<style lang="less" scoped>
  .left-bar {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    .left-menu{
      width: 100%;
      height: 100%;
      overflow-y: auto;
    }
  }
</style>
