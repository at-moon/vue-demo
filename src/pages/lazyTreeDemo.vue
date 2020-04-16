<template>
  <el-tree
    :load="loadNode"
    lazy
    :expand-on-click-node="false"
    @node-click="handleNodeClick">
  </el-tree>
</template>

<script>
import {getChildrenMenu} from '@/api/sysMenu'

export default {
  name: 'treeDemo',
  data () {
    return {
      currentNode: null
    }
  },
  mounted () {
    var root = this.currentNode.childNodes[0]
    root.expanded = true
    root.loadData()
  },
  methods: {
    loadNode (node, resolve) {
      this.currentNode = node
      if (node.level === 0) {
        return resolve([{id: -1, label: '根节点'}])
      } else {
        getChildrenMenu(node.data.id).then(res => {
          return resolve(res.data)
        }).catch((e) => {
          console.log(e)
        })
      }
    },
    handleNodeClick (data) {
      console.log(data.id)
    }
  }
}
</script>

<style scoped>

</style>
