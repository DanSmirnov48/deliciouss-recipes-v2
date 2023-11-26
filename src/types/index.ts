import { Icons } from "@/components/icons"



export type Recipe = {
  id: number,
  title: string,
  servings: number,
  image: string,
  dishTypes: string[],
  diets: string[],
};


export interface NavItem {
  title: string
  to?: string
  disabled?: boolean
  external?: boolean
}

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
    | {
      to: string
      items?: never
    }
    | {
      to?: string
      items: NavItem[]
    }
  )

export type DashboardConfig = {
  mainNav: NavItem[]
  sidebarNav: SidebarNavItem[]
}