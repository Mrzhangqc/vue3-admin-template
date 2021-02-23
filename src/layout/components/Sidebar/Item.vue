
<template>
  <div>
    <template v-if="icon">
      <i v-if="icon.includes('el-icon')" :class="[icon, 'sub-el-icon']" />
      <span v-else>Icon</span>
    </template>
    <span v-if="title">{{title}}</span>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from 'vue';
export default {
  name: 'MenuItem',
  props:['icon', 'title'],
  setup(props) {
    const state = reactive({
      ...props
    })

    return {
      ...toRefs(state)
    }
  }
}

// jsx 函数式组件实现方式

// import { h } from 'vue'

// const MenuItem = (props, context) => {
//   const { icon, title } = props
//   const vnodes = []

//   if (icon) {
//     if (icon.includes('el-icon')) {
//       vnodes.push(<i class={[icon, 'sub-el-icon']} />)
//     } else {
//       vnodes.push(<svg-icon icon-class={icon}/>)
//     }
//   }

//   if (title) {
//     vnodes.push(<span slot='title'>{(title)}</span>)
//   }
//   return h('div', {}, vnodes)
// }

// MenuItem.props = ['icon', 'title']
// export default MenuItem

</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
