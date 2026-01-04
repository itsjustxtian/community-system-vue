<script setup lang="ts">
defineProps<{
  loadingTitle: string
  loadingDescription: string
}>()

import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
import { Spinner } from '@/components/ui/spinner'
</script>

<template>
  <Empty class="w-full">
    <EmptyHeader>
      <EmptyMedia variant="icon">
        <Spinner />
      </EmptyMedia>
      <EmptyTitle>{{ loadingTitle }}</EmptyTitle>
      <EmptyDescription>
        {{ loadingDescription }}
      </EmptyDescription>
    </EmptyHeader>
  </Empty>
</template>
