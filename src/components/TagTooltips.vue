<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { PropType } from 'vue'

defineProps({
  content: {
    type: String as PropType<string>,
    required: true,
  },
})
</script>

<template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <slot />
      </TooltipTrigger>
      <TooltipContent>
        <p class="tooltip">{{ content }}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</template>

<style scoped>
.tooltip {
  font-family: 'Fredoka';
  font-weight: 400;
  font-size: 12px;
}
</style>
