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
import { PropType } from 'vue'
import { ItemType, rarityClass } from '@/stores/functions'

const open = defineModel<boolean>('open')

defineProps({
  selectedItem: {
    type: Object as PropType<ItemType>,
  },
})
</script>

<template>
  <Dialog v-model:open="open">
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <DialogContent class="border-ring">
      <DialogHeader hidden>
        <DialogTitle hidden />
        <DialogDescription hidden />
      </DialogHeader>
      <DialogFooter hidden>
        <DialogClose as-child> </DialogClose>
      </DialogFooter>

      <div class="item-container">
        <div class="item-icon w-1/3">
          <img :src="selectedItem.image" alt="" class="object-contain" />
          <h2 :class="rarityClass(selectedItem.rarity)">{{ selectedItem.name }}</h2>
        </div>
        <div class="item-description w-2/3">
          <div class="item-title">
            <p>{{ selectedItem.description }}</p>
            <h3 class="text-right" v-for="(tag, index) in selectedItem.tags" :key="index">
              {{ tag }}
            </h3>
          </div>
          <div class="item-flavor">
            <p>{{ selectedItem.flavor }}</p>
          </div>
        </div>
      </div>
    </DialogContent>
  </Dialog>
</template>

<style scoped>
.item-container {
  display: flex;
  width: 100%;
  height: fit-content;
  gap: 1rem;
}

.item-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.five-star {
  border-left: 3px solid var(--five-star);
  padding-inline: 0.5rem;
}

.four-star {
  border-left: 3px solid var(--four-star);
  padding-inline: 0.5rem;
}

.three-star {
  border-left: 3px solid var(--three-star);
  padding-inline: 0.5rem;
}

.two-star {
  border-left: 3px solid var(--two-star);
  padding-inline: 0.5rem;
}

.one-star {
  border-left: 3px solid var(--one-star);
  padding-inline: 0.5rem;
}

.item-description {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.item-title {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--input);

  p {
    font-size: 0.9rem;
  }

  h3 {
    color: var(--muted-foreground);
    padding-top: 0.5rem;
    font-size: 0.8rem;
  }
}

.item-flavor {
  p {
    font-size: 0.9rem;
    color: var(--muted-foreground);
  }
}
</style>
