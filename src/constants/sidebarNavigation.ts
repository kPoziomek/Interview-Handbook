import type { NavItem } from "@/types/navigation";
export const sidebarNavigation: Record<
  string,
  { titleKey: string; items: NavItem[] }
> = {
  js: {
    titleKey: "sidebar.js.title",
    items: [
      {
        titleKey: "sidebar.js.introduction",
        href: "/js/introduction",
        isDone: false,
      },
      {
        titleKey: "sidebar.js.data-types",
        href: "/js/data-types",
        isDone: false,
      },
    ],
  },
  react: {
    titleKey: "sidebar.react.title",
    items: [
      {
        titleKey: "sidebar.react.introduction",
        href: "/react/introduction",
        isDone: false,
      },
      {
        titleKey: "sidebar.react.components-jsx",
        href: "/react/components-jsx",
        isDone: false,
      },
    ],
  },
  vue: {
    titleKey: "sidebar.vue.title",
    items: [
      {
        titleKey: "sidebar.vue.introduction",
        href: "/vue/introduction",
        isDone: false,
      },
    ],
  },
  angular: {
    titleKey: "sidebar.angular.title",
    items: [
      {
        titleKey: "sidebar.angular.introduction",
        href: "/angular/introduction",
        isDone: false,
      },
    ],
  },
  node: {
    titleKey: "sidebar.node.title",
    items: [
      {
        titleKey: "sidebar.node.introduction",
        href: "/node/introduction",
        isDone: false,
      },
    ],
  },
  css: {
    titleKey: "sidebar.css.title",
    items: [
      {
        titleKey: "sidebar.css.introduction",
        href: "/css/introduction",
        isDone: false,
      },
    ],
  },
};
