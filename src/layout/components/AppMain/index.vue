<template>
  <section class="app-main">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
          <component :is="Component" class="router-view" />
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
  padding-top: 50px;
}
</style>

<style lang="less">
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
.app-main .scrollbar-wrapper{
  padding: 20px;
  .router-view{
    min-width: 660px;
  }
}
</style>
