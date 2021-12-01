<template>
  <icon
    :path="icon"
    w="w-10"
    :h="h"
    class="absolute top-0 left-0 z-10 pointer-events-auto text-gray-500 dark:text-gray-400"
    :class="{'cursor-pointer': cursor}"
  />
</template>

<script>
import Icon from '@/components/Icon'

export default {
  name: 'ControlIcon',
  components: {
    Icon
  },
  props: {
    icon: String,
    h: String,
    cursor: {
      type: Boolean,
      default: false
    }
  }
}
</script>
