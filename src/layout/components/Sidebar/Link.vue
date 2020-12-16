<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script>
import { isExternal } from '@/utils/validate'
import { computed, toRefs } from 'vue'

export default {
  props: {
    to: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { to } = toRefs(props)
    const isExtra = computed(() => isExternal(to))

    const linkProps = to => {
      if (isExtra.value) {
        return {
          href: to,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return { to }
    }

    return {
      isExternal: isExtra.value,
      type: isExtra.value ? 'a' : 'router-link',
      linkProps
    }
  }
}
</script>
