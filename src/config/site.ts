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
      title: "Favourite",
      to: "/favourite",
    }
  ],
  links: {
    signIn: "/sign-in",
    signUp: "/sign-up"
  },
}