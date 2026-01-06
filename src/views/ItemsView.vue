<script setup lang="ts">
import EmptyLoading from '@/components/EmptyLoading.vue'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Icon } from '@iconify/vue'
import { SearchIcon } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'
import TagTooltips from '@/components/TagTooltips.vue'
import ViewItem from '@/components/ViewItem.vue'
import { supabase } from '@/lib/supabase'
import { onMounted, ref } from 'vue'
import { ItemType, rarityClass, rarityClassText } from '@/stores/functions'

const items = ref<ItemType[]>([])
const filteredItems = ref<ItemType[]>([])
const loading = ref(false)
const selectedItem = ref<ItemType>(null)
const openItemDialog = ref(false)
const showFilters = ref(false)
const searchTerm = ref('')
const rarityFilters = ref<string[]>([])
const rarityValues = ref(null)

async function getItems() {
  loading.value = true
  const { data } = await supabase.from('items').select()
  if (!data) return

  const sorteddata = data.sort((a, b) => {
    if (a.rarity !== b.rarity) {
      return b.rarity - a.rarity
    }
    return a.name.localeCompare(b.name)
  })

  items.value = sorteddata
  filteredItems.value = sorteddata

  const raritySet = new Set<number>()

  for (const item of sorteddata) {
    if (item.rarity !== null && item.rarity !== undefined) {
      raritySet.add(item.rarity)
    }
  }

  rarityValues.value = Array.from(raritySet).sort((a, b) => a - b)

  loading.value = false
}

function setSelectedItem(selection: ItemType) {
  selectedItem.value = selection
  openItemDialog.value = true
}

function onRarityFiltersUpdate(newVal: string[]) {
  if (newVal.includes('All')) {
    rarityFilters.value = ['All']
  } else {
    rarityFilters.value = newVal.filter((v) => v !== 'All')
  }
  applySearchAndFilters(searchTerm.value)
}

function applySearchAndFilters(searchTerm: string) {
  const term = searchTerm.trim().toLowerCase()

  filteredItems.value = items.value
    .filter((item) => {
      const matchesSearch = term === '' || item.name.toLowerCase().includes(term)

      const rarityOk =
        rarityFilters.value.length === 0 ||
        rarityFilters.value.includes('All') ||
        rarityFilters.value.some((f) => String(item.rarity).includes(f))

      return matchesSearch && rarityOk
    })
    .sort((a, b) => a.name.localeCompare(b.name))
}

function onSearching(e: Event) {
  searchTerm.value = (e.target as HTMLInputElement).value
  applySearchAndFilters(searchTerm.value)
}

function showFilterToggles() {
  showFilters.value = !showFilters.value
}

onMounted(() => {
  getItems()
})
</script>

<template>
  <main>
    <div class="section-information">
      <h1>Items</h1>
      <p>View all the Items in Wuthering Waves.</p>
    </div>

    <div class="search-and-filter">
      <InputGroup @input="onSearching">
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      <Button
        :class="`cursor-pointer aspect-square border-input text-ring ${showFilters ? 'bg-input text-white' : ''}`"
        variant="outline"
        title="Filter"
        @click="showFilterToggles()"
      >
        <TagTooltips v-if="showFilters === true" content="Hide Filters">
          <span>
            <Icon icon="tabler:filter" width="24" height="24" />
          </span>
        </TagTooltips>
        <TagTooltips v-else content="Show Filters">
          <span><Icon icon="tabler:filter-cancel" width="24" height="24" /></span>
        </TagTooltips>
      </Button>
    </div>
    <transition name="expand">
      <div v-if="showFilters" class="filterGroup">
        <ToggleGroup
          v-model="rarityFilters"
          @update:model-value="onRarityFiltersUpdate"
          type="multiple"
          class="filters"
          variant="outline"
        >
          <ToggleGroupItem value="All" class="item">
            <TagTooltips content="All">
              <span>
                <Icon icon="lucide:asterisk" width="30" />
              </span>
            </TagTooltips>
          </ToggleGroupItem>
          <ToggleGroupItem
            v-for="rarity in rarityValues"
            :key="rarity"
            :value="rarity"
            class="item"
          >
            <span :class="rarityClassText(rarity)"> {{ rarity }}★ </span>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </transition>

    <EmptyLoading
      v-if="loading"
      loading-title="Loading Items"
      loading-description="Please wait a moment while we fetch the items."
    />

    <transition-group v-else name="fade" tag="div" class="resonator-list">
      <div
        class="character"
        v-for="item in filteredItems"
        :key="item.name"
        @click="setSelectedItem(item)"
      >
        <div class="character-icon" :class="rarityClass(item.rarity)">
          <img :src="item.image" alt="" />
        </div>
        <div class="character-name w-full">
          <TagTooltips :content="item.name">
            <p class="text-ellipsis text-nowrap overflow-clip">{{ item.name }}</p>
          </TagTooltips>
        </div>
      </div>
    </transition-group>

    <ViewItem v-model:open="openItemDialog" :selected-item="selectedItem" />
  </main>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.expand-enter-active,
.expand-leave-active {
  transition:
    max-height 0.3s ease,
    opacity 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 1000px; /* large enough to fit content */
  opacity: 1;
}

main {
  display: flex;
  flex-direction: column;
  font-family: 'Fredoka';
  gap: calc(var(--component-gap) * 10);
}

.section-information {
  gap: var(--component-gap);
}

.search-and-filter {
  display: flex;
  gap: calc(var(--component-gap) * 5);
}

.filterGroup {
  display: flex;
  gap: 1rem;
}

.filters .item {
  border: 1px solid var(--input);
  width: 36px;
  height: 36px;
  padding-inline: 0px;
  margin: auto;
}

.item img {
  padding-inline: 0;
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
}

.character-name p {
  font-weight: 400;
}
</style>
