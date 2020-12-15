<template>
  <div class="navbar">
    <hamburger :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />

    <breadcrumb class="breadcrumb-container" />

    <div class="right-menu">
      <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
        <div class="avatar-wrapper">
          <img :src="avatar" class="user-avatar">
          <span class="user-name">{{userName}}</span>
          <i class="el-icon-caret-bottom" />
        </div>
        <template #dropdown>
          <el-dropdown-menu  class="user-dropdown">
            <!-- <router-link to="/">
              <el-dropdown-item>
                路由
              </el-dropdown-item>
            </router-link>
            <a target="_blank" href="链接">
              <el-dropdown-item>Github</el-dropdown-item>
            </a> -->
            <el-dropdown-item divided @click="logout">
              <span style="display:block;">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'
const AvatarImg = require('@/assets/logo.png')

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    
    const sidebar = computed(_ => store.getters.sidebar)

    const userName = computed(_ => store.getters.user.name)

    const toggleSideBar = _ => store.dispatch('app/toggleSideBar')

    const logout = async _ => {
      await store.dispatch('user/logout')
      router.push(`/login?redirect=${route.fullPath}`)
    }

    return {
      avatar: AvatarImg,
      userName,
      sidebar,
      toggleSideBar,
      logout
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-name {
          float: right;
          height: 40px;
          line-height: 40px;
          font-size: 14px;
          padding-left: 5px;
        }

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
<style lang="less">
.right-menu {
  .right-menu-item {
    display: inline-block;
    padding: 0 8px;
    height: 100%;
    font-size: 18px;
    color: #5a5e66;
    vertical-align: text-bottom;

    &.hover-effect {
      cursor: pointer;
      transition: background .3s;

      &:hover {
        background: rgba(0, 0, 0, .025)
      }
    }
  }
}
.avatar-container {
  margin-right: 30px;
}
</style>
