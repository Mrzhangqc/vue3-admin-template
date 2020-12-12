<template>
  <section class="app-main">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </el-scrollbar>
  </section>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>

<style scoped>
.app-main {
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header+.app-main {
  /*50 = navbar  */
  padding-top: 50px;
}
</style>

<style lang="less">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
.app-main .scrollbar-wrapper{
  padding: 20px;
}
</style>
