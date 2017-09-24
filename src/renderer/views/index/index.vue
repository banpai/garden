<template>
  <Row class="wrapper">
    <Col span="4" class="left" style="height: 100%;">
      <left-bar></left-bar>
    </Col>
    <Col span="20" class="container">
      <code-search></code-search>
      <prograss-edit></prograss-edit>
      <transition name="app">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
        
      </transition>
    </Col>
  </Row>
</template>

<script>
  import LeftBar from '@/views/siderBar/leftBar'
  import CodeSearch from '@/views/code/codeSearch'
  import PrograssEdit from '@/views/prograssedit/prograssEdit'
  // import RightBar from '@/views/siderBar/rightBar'
  // import RightDisk from '@/views/siderBar/rightDisk'
  import wmic from 'node-wmic'
  import { toMem } from '@/extend/filters'
  import { readFolder } from '@/common/js/file'
  import { mapMutations } from 'vuex'
  
  export default {
    components: {
      LeftBar,
      CodeSearch,
      PrograssEdit
      // RightBar,
      // RightDisk
    },
    data () {
      return {
        diskInfo: [],
        folderInfo: [],
        columns: [
          {
            title: '盘符名',
            key: 'Name',
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'social-windows',
                    color: '#33aefc'
                  }
                }),
                h('strong', `${params.row.VolumeName} (${params.row.Name})`)
              ])
            }
          },
          {
            title: '文件系统',
            key: 'FileSystem'
          },
          {
            title: '剩余总量',
            key: 'FreeSpace',
            render: (h, params) => {
              return h('div', [
                toMem(params.row.FreeSpace)
              ])
            }
          },
          {
            title: '总容量',
            key: 'Size',
            render: (h, params) => {
              return h('div', [
                toMem(params.row.Size)
              ])
            }
          }
        ],
        diskDetail: {}
      }
    },
    methods: {
      toMem: toMem,
      ...mapMutations({
        getFolderInfo: 'GET_FOLDER_INFO'
      }),
      info (row) {
        this.diskDetail = row
      },
      async forward (row) {
        if (row.Description === '光盘') return
        let path = row.Name + '\\\\'
        await readFolder(path).then(res => {
          this.getFolderInfo(res)
        })
        this.$router.push({
          path: `/computer/${path}`
        })
      },
      normalize (arr) {
        let ret = []
        arr.forEach((item, index) => {
          if (arr[index].FileSystem) {
            ret.push(arr[index])
          }
        })
        return ret
      }
    },
    watch: {
      '$route' () {
        // if (this.$route.name === 'index') {
        // }
      }
    },
    created () {
      wmic.disk().then(disk => {
        this.diskInfo = disk
      })
    }
  }
</script>
<style lang="less" scoped>
  @import 'index.css';
</style>
