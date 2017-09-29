<template>
  <div id="app">
   <Row class="wrapper">
      <Col span="4" class="left" style="height: 100%;">
        <left-bar></left-bar>
      </Col>
      <Col span="20" class="container">
      菜单是的都是
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </Col>
    </Row>
  </div>
</template>

<script>
  import LeftBar from '@/views/siderBar/leftBar'
  export default {
    name: 'app',
    components: {
      LeftBar
    }
  }
</script>

<style>
  /* CSS */
  @import '../../node_modules/reset-css/reset.css';
  body {
    font-family: "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
    -webkit-user-select: none;
    -webkit-app-region: drag;
    cursor: default;
    min-width: 450px;
    background-color: #fdfdfd;
    overflow: hidden;
  }

  html, body {
    height: 100%;
  }

  #app {
    height: 100%;
    min-width: 910px;
  }
  /* 设置滚动条的样式 */

  ::-webkit-scrollbar {
    width: 1px;
  }
  /* 滚动槽 */

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #dddee1;
    border-radius: 10px;
  }
  /* 滚动条滑块 */

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #dddee1;
    -webkit-box-shadow: inset 0 0 6px #dddee1;
  }

  ::-webkit-scrollbar-thumb:window-inactive {
    background: #dddee1;
  }
  .wrapper{
    height: 100%;
  }
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
  .fade-enter-active,
.fade-leave-active {
  transition: opacity .4s
}
.fade-enter,
.fade-leave {
  opacity: 0
}
.wrapper {
  height: 100%;
  overflow-y: auto;
  .left{
      border: 1px solid;
  }
}
.ivu-col-span-6 {
  height: 100%;
}
.header {
  padding: 10px;
  header {
    font: bold 20px/150% 'Microsoft Yahei';
  }
}
.container {
  position: relative;
  height: 100%;
  .footer-bread {
    position: fixed;
    left: 26%;
    top: 10px;
    z-index: 100;
  }
}
.ivu-table-wrapper {
  border: none !important;
}
</style>
