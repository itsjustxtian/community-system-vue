<script setup lang="ts">
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const open = defineModel<boolean>('open')
defineProps({
  image: String,
})
</script>

<template>
  <Dialog v-model:open="open">
    <form>
      <DialogTrigger as-child>
        <slot />
      </DialogTrigger>
      <DialogContent class="border-ring">
        <div class="flex items-center justify-center h-[90vh]">
          <img :src="image" alt="image" class="w-full h-full object-cover" />
        </div>
        <DialogHeader hidden>
          <DialogTitle></DialogTitle>
          <DialogDescription> </DialogDescription>
        </DialogHeader>
        <DialogFooter hidden>
          <DialogClose as-child> </DialogClose>
        </DialogFooter>
      </DialogContent>
    </form>
  </Dialog>
</template>
