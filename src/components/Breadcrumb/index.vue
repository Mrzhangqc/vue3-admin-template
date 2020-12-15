<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in levelList" :key="`${index}-${item.path}`">
        <span v-if="item.redirect==='noRedirect'||index==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
import { reactive, toRefs, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  name: 'Breadcrumb',
  setup() {
    const state = reactive({
      levelList: null
    })
    const route = useRoute()
    const router = useRouter()

    const getBreadcrumb = () => {
      // only show routes with meta.title
      // only support two layers of nested
      const matched = route.matched.filter(item => item.meta && item.meta.title)
      const routeList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
      const firstRoute = matched && matched.length > 0 ? matched[0] : null;
      const parentRoute = firstRoute && firstRoute.meta.parentRoute ? firstRoute.meta.parentRoute : null

      state.levelList = parentRoute ? [parentRoute].concat(routeList) : routeList
    }

    // 监听单个属性
    watch(() => route.path, (newVal, oldVal) => {
      if (newVal) {
        getBreadcrumb()
      }
    })

    const pathCompile = (path) => {
      const { query } = route
      return { path, query }
    }

    const handleLink = (item) => {
      const { redirect, path } = item
      if (redirect) {
        router.push(redirect)
        return
      }
      router.push(pathCompile(path))
    }

    return {
      ...toRefs(state),
      handleLink
    }
  }
}
</script>

<style lang="less" scoped>
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
