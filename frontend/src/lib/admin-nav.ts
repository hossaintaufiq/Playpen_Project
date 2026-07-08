export const adminNavGroups = [
  { id: "home", label: "Home page" },
  { id: "news", label: "News & events" },
  { id: "people", label: "People" },
  { id: "programs", label: "Careers & achievements" },
] as const;

export type AdminNavGroupId = (typeof adminNavGroups)[number]["id"];

export type AdminNavIcon =
  | "layout"
  | "image"
  | "megaphone"
  | "bell"
  | "calendar"
  | "gallery"
  | "users"
  | "briefcase"
  | "trophy"
  | "graduation";

export type AdminNavItem = {
  label: string;
  href: string;
  icon: AdminNavIcon;
  group?: AdminNavGroupId;
  description: string;
  whereOnSite: string;
  steps: string[];
};

export const adminNavItems: AdminNavItem[] = [
  {
    label: "Dashboard",
    href: "/portal/admin/dashboard",
    icon: "layout",
    description:
      "Welcome! This is your control room for the Playpen website. Pick a task below — no technical skills needed.",
    whereOnSite: "Overview of everything you manage",
    steps: [
      "Tap any coloured card to open that section.",
      "Make your changes, then press Save changes at the bottom of the page.",
      "Updates appear on the live website right away.",
    ],
  },
  {
    label: "Hero Slides",
    href: "/portal/admin/dashboard/hero",
    icon: "image",
    group: "home",
    description:
      "Change the large photos visitors see at the top of the home page. Think of these as a slideshow banner.",
    whereOnSite: "Home page — top banner slideshow",
    steps: [
      "Each card is one photo in the slideshow.",
      "Turn Active ON to show a photo. Turn it OFF to hide it.",
      "Use Order (1, 2, 3…) to set which photo appears first.",
      "When done, press Save changes at the bottom.",
    ],
  },
  {
    label: "Announcements",
    href: "/portal/admin/dashboard/announcements",
    icon: "megaphone",
    group: "home",
    description:
      "Edit the scrolling message bar that runs below the menu on every page — great for urgent news or the academic year.",
    whereOnSite: "Every page — scrolling bar under the menu",
    steps: [
      "Turn the ticker ON or OFF to show or hide the bar.",
      "Type your message in the text boxes.",
      "Press Save changes when finished.",
    ],
  },
  {
    label: "Notices",
    href: "/portal/admin/dashboard/notices",
    icon: "bell",
    group: "home",
    description:
      "Add short notice links shown in the home page community section — like quick links to important pages.",
    whereOnSite: "Home page — community section",
    steps: [
      "Press + Add notice to create a new item.",
      "Write a clear title and paste the page link (e.g. /about).",
      "Tick Published so visitors can see it.",
      "Press Save changes at the bottom.",
    ],
  },
  {
    label: "Events",
    href: "/portal/admin/dashboard/events",
    icon: "calendar",
    group: "news",
    description:
      "List upcoming school events that appear on the home page calendar and events area.",
    whereOnSite: "Home page — events section",
    steps: [
      "Press + Add event for a new school event.",
      "Fill in the title, date, and details.",
      "Tick Published to show it on the website.",
      "Press Save changes when done.",
    ],
  },
  {
    label: "Gallery",
    href: "/portal/admin/dashboard/gallery",
    icon: "gallery",
    group: "news",
    description:
      "Organise photo albums for the public Gallery page — group photos by event or occasion.",
    whereOnSite: "Gallery page — photo albums",
    steps: [
      "Each album is one event or occasion.",
      "Add image paths (one per line) for photos in that album.",
      "Press Save changes to update the gallery.",
    ],
  },
  {
    label: "Teachers",
    href: "/portal/admin/dashboard/teachers",
    icon: "users",
    group: "people",
    description:
      "Add or update teacher profiles shown on the website — name, subject, photo, and division.",
    whereOnSite: "About section — faculty listings",
    steps: [
      "Press + Add teacher for a new profile.",
      "Fill in name, role, and photo path.",
      "Tick Published to show on the website.",
      "Press Save changes at the bottom.",
    ],
  },
  {
    label: "Vacancies",
    href: "/portal/admin/dashboard/vacancies",
    icon: "briefcase",
    group: "programs",
    description:
      "Post job openings on the Career at Playpen page. Only published vacancies accept applications.",
    whereOnSite: "About → Career at Playpen",
    steps: [
      "Press + Add vacancy for a new job post.",
      "Write the job title and a short description.",
      "Tick Published so people can see it and apply.",
      "Press Save changes when finished.",
    ],
  },
  {
    label: "Achievements",
    href: "/portal/admin/dashboard/achievements",
    icon: "trophy",
    group: "programs",
    description:
      "Showcase student wins — competitions, sports, science fairs, and awards on the achievements page.",
    whereOnSite: "Academics → Student Achievements",
    steps: [
      "Press + Add achievement for a new event.",
      "Fill in title, date, venue, and results (one per line).",
      "Tick Published to show on the website.",
      "Press Save changes at the bottom.",
    ],
  },
  {
    label: "Alumni",
    href: "/portal/admin/dashboard/alumni",
    icon: "graduation",
    group: "people",
    description:
      "Review alumni registration forms. Approve good submissions to show them on the alumni page.",
    whereOnSite: "About → Playpen Alumni Association",
    steps: [
      "Open Pending to see new registrations.",
      "Press Approve to publish, or Reject to decline.",
      "Approved alumni appear on the public alumni page.",
    ],
  },
];

export function getAdminNavItem(pathname: string): AdminNavItem | undefined {
  return adminNavItems.find((item) => item.href === pathname);
}

export const adminManageItems = adminNavItems.filter((item) => item.href !== "/portal/admin/dashboard");
