import {
  LayoutDashboard,
  Newspaper,
  Database,
  type LucideIcon,
  Megaphone,
  Medal,
  Brain,
  Tag,
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "",
    items: [
      {
        title: "Dashboard",
        url: "/",
        icon: LayoutDashboard,
      },
      {
        title: "Competitive Intelligence",
        url: "/competitive-intelligence",
        icon: Brain,
      },
      {
        title: "Mentions",
        url: "/social-listening/fil-actualites",
        icon: Tag,
      },
      {
        title: "Reports",
        url: "/reports",
        icon: Newspaper, // fil d’actu = news feed
      },
      {
        title: "Ranking",
        url: "/reseaux-sociaux/ranking",
        icon: Medal, // you can replace with Trophy if you prefer
      },
      {
        title: "Brand Watch",
        url: "/reseaux-sociaux/brand-watch",
        icon: Megaphone, // brand monitoring
      },
    ],
  },
  // {
  //   id: 2,
  //   label: "Réseaux sociaux",
  //   items: [
  //     {
  //       title: "Vue d’ensemble",
  //       url: "/reseaux-sociaux/vue-ensemble",
  //       icon: BarChart3, // overview analytics
  //     },
  //     {
  //       title: "Ranking",
  //       url: "/reseaux-sociaux/ranking",
  //       icon: Medal, // you can replace with Trophy if you prefer
  //     },
  //     {
  //       title: "Brand Watch",
  //       url: "/reseaux-sociaux/brand-watch",
  //       icon: Megaphone, // brand monitoring
  //     },
  //   ],
  // },
  {
    id: 3,
    label: "Intégrations",
    items: [
      {
        title: "Données et API",
        url: "/integrations/donnees-api",
        icon: Database,
        comingSoon: true,
      },
    ],
  },
];
