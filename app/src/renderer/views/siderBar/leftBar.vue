<template>
  <div class="left-bar"> 
    <Menu :theme="theme3" :active-name="name"  @on-select="cgname" :open-names="['1','2']" class="left-menu" style="width: 100%;">
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-paper"></Icon>
                代码管理
            </template>
            <MenuItem name="1-1">
                搜索代码
            </MenuItem>
            <MenuItem name="1-2">
                增加代码
            </MenuItem>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                项目管理
            </template>
            <MenuItem  v-for="item in progressData" v-bind:name="item.name">
                {{ item.title }}
            </MenuItem>
        </Submenu>
    </Menu>
   </div>
</template>
<script>
  import {getdata} from '@/api/leftbar'
  export default {
    data () {
      return {
        progressData: [],
        name: '1-1',
        theme3: 'light'
      }
    },
    // 在 `methods` 对象中定义方法
    methods: {
      onselect: function (n) {
        console.log(n)
      },
      cgname: function (n) {
        console.log()
        let num = n.split('-')
        if (num[0] === '1') {
          if (num[1] === '1') {
            // 跳转导航
            this.$router.replace('codeSearch')
          } else if (num[1] === '2') {
            this.$router.replace('addCode')
          }
        } else if (num[0] === '2') {
          // 跳转导航
          this.$router.replace({
            name: 'prograssEdit',
            params: {
              num: num[1]
            }
          })
        }
      },
      _getdata: function () {
        this.progressData = getdata()
      }
    },
    created () {
      this._getdata()
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
