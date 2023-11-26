import { type SidebarNavItem } from "@/types"

export interface DashboardConfig {
  sidebarNav: SidebarNavItem[]
}

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: "Account",
      to: "/dashboard/account",
      icon: "user",
      items: [],
    },
    {
      title: "Posts",
      to: "/dashboard/posts",
      icon: "post",
      items: [],
    },
    {
      title: "Billing",
      to: "/dashboard/billing",
      icon: "billing",
      items: [],
    }
  ],
}