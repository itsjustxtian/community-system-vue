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
import { WeaponType, rarityClass } from '@/stores/functions'

const open = defineModel<boolean>('open')

function highlightText(text: string | null) {
  if (!text) return ''

  let result = text

  result = result.replace(/\d+(\.\d+)?%?/g, (match) => {
    return `<span class="colored-number">${match}</span>`
  })

  return result
}

defineProps({
  selectedWeapon: {
    type: Object as PropType<WeaponType>,
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
          <img :src="selectedWeapon.image" alt="" class="object-contain" />
        </div>
        <div class="item-description w-2/3">
          <div class="item-title">
            <h2 :class="rarityClass(selectedWeapon.rarity)">
              {{ selectedWeapon.name }}
            </h2>
            <div class="flex justify-between">
              <p>ATK: {{ selectedWeapon.base_attack }}</p>
              <p>{{ selectedWeapon.second_stat }}: {{ selectedWeapon.second_stat_value }}</p>
            </div>
            <p class="text-right">{{ selectedWeapon.weapon_type }}</p>
          </div>
          <div class="item-flavor">
            <p v-html="highlightText(selectedWeapon.passive)"></p>
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

  h2 {
    font-size: 1.1rem;
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
