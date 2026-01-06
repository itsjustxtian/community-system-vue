export interface ItemType {
  id: number | null
  slug: string | null
  name: string
  tags: string[]
  description: string | null
  flavor: string | null
  rarity: number | null
  drop_locations: string[] | null
  sort_index: number | null
  image: string | null
}

export interface WeaponType {
  id: number
  name: string | null
  rarity: number | null
  weapon_type: string | null
  passive: string | null
  base_attack: number | null
  second_stat: string | null
  second_stat_value: string | null
  image: string | null
}

export function rarityClass(rarity: number) {
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

export function rarityClassText(rarity: number) {
  return rarity === 5
    ? 'text-five-star'
    : rarity === 4
      ? 'text-four-star'
      : rarity === 3
        ? 'text-three-star'
        : rarity === 2
          ? 'text-two-star'
          : 'text-one-star'
}
