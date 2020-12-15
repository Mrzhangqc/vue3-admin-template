<template>
  <div :class="classObj" class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from 'vue'
import { Navbar, Sidebar, AppMain } from './components'
import { useStore } from 'vuex'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  setup() {
    const store = useStore()

    const state = reactive({
      classObj: computed(() => {
        const { getters: { sidebar } } = store
        return {
          hideSidebar: !sidebar.opened,
          withoutAnimation: sidebar.withoutAnimation
        }
      })
    })

    return {
      ...toRefs(state),
      fixedHeader: true
    }
  }
}
</script>

<style lang="less" scoped>
  @import "~@/styles/mixin.less";
  @import "~@/styles/variables.less";

  .app-wrapper {
    .mixin-clearfix();
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - @sideBarWidth);
    transition: width 0.28s;
  }

  .hideSidebar .fixed-header {
    width: calc(100% - 54px)
  }

</style>
