<template>
  <el-tree
    :data="data"
    node-key="id"
    :default-expanded-keys="['-1']"
    :expand-on-click-node="false"
    @node-click="handleNodeClick">
  </el-tree>
</template>

<script>
import {getMenuTree} from '@/api/sysMenu'

export default {
  name: 'treeDemo',
  data () {
    return {
      data: []
    }
  },
  created () {
    getMenuTree().then(res => {
      this.data = res.data
    }).catch((e) => {
      console.log(e)
    })
  },
  methods: {
    handleNodeClick (data) {
      console.log(data.id)
    }
  }
}
</script>

<style scoped>

</style>
