import { AudioLines, Home } from 'lucide-vue-next'
import IconWeapons from '../components/icons/IconWeapons.vue'
import IconItems from '../components/icons/IconItems.vue'
import IconPlanner from '../components/icons/IconPlanner.vue'

export const navItems = [
  {
    text: 'Home',
    link: '/',
    enableDropdown: false,
    dropdown: [],
    icon: Home,
  },
  {
    text: 'Characters',
    link: '/characters',
    enableDropdown: false,
    dropdown: [],
    icon: AudioLines,
  },
  {
    text: 'Weapons',
    link: '/weapons',
    enableDropdown: false,
    dropdown: [],
    icon: IconWeapons,
  },
  {
    text: 'Items',
    link: '/items',
    enableDropdown: false,
    dropdown: [],
    icon: IconItems,
  },
  {
    text: 'Planner',
    link: '/planner',
    enableDropdown: false,
    dropdown: [],
    icon: IconPlanner,
  },
]
