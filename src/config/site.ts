export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "deliciouss",
  description: "",
  mainNav: [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Dashboard",
      to: "/dashboard",
    }
  ],
  links: {
    signIn: "/sign-in",
    signUp: "/sign-up"
  },
}