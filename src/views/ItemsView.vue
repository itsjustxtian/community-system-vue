<script setup lang="ts">
import { supabase } from '@/lib/supabase'
import { onMounted, ref } from 'vue'

const items = ref([])

async function getItems() {
  const { data } = await supabase.from('items').select()
  if (!data) return

  const sorteddata = data.sort((a, b) => {
    if (a.rarity !== b.rarity) {
      return b.rarity - a.rarity
    }
    return a.name.localeCompare(b.name)
  })

  items.value = sorteddata
}

function rarityClass(rarity: number) {
  return rarity === 5
    ? 'five-star'
    : rarity === 4
      ? 'four-star'
      : rarity === 3
        ? 'three-star'
        : rarity === 2
          ? 'two-star'
          : 'one-star'
}

onMounted(() => {
  getItems()
})
</script>

<template>
  <main>
    <div class="section-information">
      <h1>Characters</h1>
      <p>View all the Items in Wuthering Waves</p>
    </div>
    <div class="resonator-list">
      <div class="character" v-for="item in items" :key="item.name">
        <div class="character-icon" :class="rarityClass(item.rarity)">
          <img :src="item.image" alt="" />
        </div>
        <div class="character-name">
          <p class="text-ellipsis">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  font-family: 'Fredoka';
  gap: calc(var(--component-gap) * 10);
}

.section-information {
  gap: var(--component-gap);
}

.resonator-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.character {
  display: flex;
  flex-direction: column;
  max-width: 100px;
  background-color: var(--card);
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 250ms ease-in-out;
}

.character:hover {
  box-shadow: 0px 0px 5px var(--ring);
  transition: all 250ms ease-in-out;
}

.character-icon {
  overflow: clip;
}

.five-star {
  background-image: linear-gradient(to top, var(--five-star) 0%, transparent 50%);
  border-bottom: 2px solid var(--five-star);
  transition: all 250ms ease-in-out;
}

.character:hover .five-star {
  background-image: linear-gradient(to top, var(--five-star-light) 0%, transparent 50%);
  transition: all 250ms ease-in-out;
}

.four-star {
  background-image: linear-gradient(to top, var(--four-star) 0%, transparent 50%);
  border-bottom: 2px solid var(--four-star);
  transition: all 250ms ease-in-out;
}

.character:hover .four-star {
  background-image: linear-gradient(to top, var(--four-star-light) 0%, transparent 50%);
  transition: all 250ms ease-in-out;
}

.three-star {
  background-image: linear-gradient(to top, var(--three-star) 0%, transparent 50%);
  border-bottom: 2px solid var(--three-star);
  transition: all 250ms ease-in-out;
}

.character:hover .three-star {
  background-image: linear-gradient(to top, var(--three-star-light) 0%, transparent 50%);
  transition: all 250ms ease-in-out;
}

.two-star {
  background-image: linear-gradient(to top, var(--two-star) 0%, transparent 50%);
  border-bottom: 2px solid var(--two-star);
  transition: all 250ms ease-in-out;
}

.character:hover .two-star {
  background-image: linear-gradient(to top, var(--two-star-light) 0%, transparent 50%);
  transition: all 250ms ease-in-out;
}

.one-star {
  background-image: linear-gradient(to top, var(--one-star) 0%, transparent 50%);
  border-bottom: 2px solid var(--one-star);
  transition: all 250ms ease-in-out;
}

.character:hover .one-star {
  background-image: linear-gradient(to top, var(--one-star-light) 0%, transparent 50%);
  transition: all 250ms ease-in-out;
}

.character-icon img {
  mask-image: linear-gradient(black 80%, transparent);
  transition: all 250ms ease-in-out;
}

.character:hover .character-icon img {
  scale: 105%;
  transition: all 250ms ease-in-out;
}

.character-name {
  text-align: center;
  padding: 0.2rem;
  overflow: hidden;
}

.character-name p {
  font-weight: 400;
  text-wrap: nowrap;
  text-overflow: ellipsis;
}
</style>
