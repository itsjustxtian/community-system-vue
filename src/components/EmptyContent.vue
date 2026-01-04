<script setup lang="ts">
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
</script>

<template>
  <Empty class="w-full h-full">
    <EmptyHeader>
      <EmptyMedia>
        <img
          src="https://wutheringlab.com/wp-content/uploads/T_ChatEmo_C_05.png"
          alt="EmptyContent"
          class="max-h-250px w-auto"
        />
      </EmptyMedia>
      <EmptyTitle>Coming Soon!</EmptyTitle>
      <EmptyDescription>
        This page does not have content yet. Stay tuned for more!
      </EmptyDescription>
    </EmptyHeader>
  </Empty>
</template>
