export const communityServiceIntro =
  "This is a very much ongoing practice in Playpen. Every year, our students have participated and directly involved in serving their communities with compassion, dignity, and civic responsibility.";

export const communityServiceActivitiesIntro =
  "From helping the poor and needy to donating warm clothes during winter, volunteering in social organisations, and designing small homes for low-income families in society — Playpen students learn the profound value of giving back.";

export const communityServiceActivities = [
  "Helping the poor and needy",
  "Donating clothes during winter",
  "Volunteering in various social organisations",
  "Designing and building small homes for people of low income in society",
] as const;

export const communityServiceHighlights = [
  {
    title: "Ongoing Practice",
    text: "Community service is a continuing tradition at Playpen, year after year.",
  },
  {
    title: "Student-Led Involvement",
    text: "Students participate directly in serving their communities.",
  },
  {
    title: "Compassion in Action",
    text: "Support for the poor, winter clothing drives, and social volunteering.",
  },
  {
    title: "Building for Others",
    text: "Students have helped design and build small homes for low-income families.",
  },
] as const;

export interface DonationServiceInitiative {
  id: string;
  title: string;
  tag: string;
  badgeColor: "amber" | "maroon" | "teal" | "blue";
  iconName: "Gift" | "Heart" | "Home" | "Users";
  tagline: string;
  description: string;
  targetGroup: string;
  studentRole: string;
  impactPoints: string[];
  keyMetric?: {
    value: string;
    label: string;
  };
}

export const donationServiceInitiatives: DonationServiceInitiative[] = [
  {
    id: "winter-clothing-drive",
    title: "Winter Clothes & Warmth Donation",
    tag: "Annual Donation Drive",
    badgeColor: "amber",
    iconName: "Gift",
    tagline: "Spreading warmth to cold-affected communities across Bangladesh",
    description:
      "An annual school-wide donation campaign where students, parents, and faculty collect, sort, and distribute warm winter apparel, blankets, and thermal essentials to underprivileged families during harsh winter months.",
    targetGroup: "Underprivileged rural households, street children, and cold-affected districts.",
    studentRole: "Managing campus drop-off stations, quality sorting, sizing, packing, and direct handover.",
    impactPoints: [
      "Thousands of warm garments & thermal blankets distributed annually",
      "Direct student-led logistics, sorting, and packaging pipeline",
      "Coordinated with trusted local community volunteers on the ground",
      "Clean, hygienic, and dignified distribution protocols",
    ],
    keyMetric: {
      value: "Annual",
      label: "Winter Mobilization",
    },
  },
  {
    id: "aid-poor-needy",
    title: "Relief & Aid for Low-Income Families",
    tag: "Social Welfare & Relief",
    badgeColor: "maroon",
    iconName: "Heart",
    tagline: "Direct assistance, food staples, and emergency aid for vulnerable communities",
    description:
      "Direct humanitarian outreach providing emergency food rations, daily essentials, and educational aid packages to low-income families, daily wage earners, and community members facing hardship.",
    targetGroup: "Disadvantaged families, daily wage workers, and distress-impacted communities.",
    studentRole: "Fundraising coordination, organizing food ration parcels, and community outreach.",
    impactPoints: [
      "Essential grocery & staple nutrition packages during hardship periods",
      "Stationery & book donation packages for underprivileged school children",
      "Rapid student mobilization for national emergency disaster relief",
      "Instilling lifelong empathy and civic consciousness in youth",
    ],
    keyMetric: {
      value: "Direct",
      label: "Community Aid",
    },
  },
  {
    id: "shelter-housing",
    title: "Low-Income Community Housing Project",
    tag: "Shelter & Engineering Service",
    badgeColor: "teal",
    iconName: "Home",
    tagline: "Designing and building sustainable small homes for vulnerable families",
    description:
      "A unique service initiative where students apply practical design thinking, project management, and fundraising to help build durable, weather-safe small homes for families without secure shelter.",
    targetGroup: "Homeless and ultra-low income families in need of dignified shelter.",
    studentRole: "Conceptual architectural planning, sustainable material research, and on-site volunteer support.",
    impactPoints: [
      "Providing safe, dignified, and weather-resistant homes for vulnerable families",
      "Hands-on student engagement with sustainable building concepts",
      "Collaborative project execution with local community tradespeople",
      "Transformational life impact on recipient families",
    ],
    keyMetric: {
      value: "Long-Term",
      label: "Durable Shelter Impact",
    },
  },
  {
    id: "social-volunteering",
    title: "Social Volunteering & NGO Partnerships",
    tag: "Civic Mentorship",
    badgeColor: "blue",
    iconName: "Users",
    tagline: "Active engagement with orphanages, care homes, and youth organizations",
    description:
      "Students dedicate their time to volunteer with recognized charitable organizations, conducting educational workshops, reading sessions, art activities, and companionship visits at orphanages and care centers.",
    targetGroup: "Orphanages, child welfare foundations, and senior care homes.",
    studentRole: "Peer tutoring, storytelling, cultural engagement, and social awareness campaigns.",
    impactPoints: [
      "Mentorship and literacy support for underprivileged children",
      "Art, sports, and cultural enrichment workshops led by Playpen students",
      "Sustained partnerships with credible non-profit organizations",
      "Cultivating empathetic leadership and active citizenship",
    ],
    keyMetric: {
      value: "Ongoing",
      label: "Active Engagement",
    },
  },
];

export const serviceWorkflowSteps = [
  {
    step: "01",
    title: "Empathy & Assessment",
    description: "Students identify real community needs through guided discussions and social awareness workshops.",
  },
  {
    step: "02",
    title: "Mobilization & Collection",
    description: "Setting up campus donation drives, awareness booths, and community fundraising campaigns.",
  },
  {
    step: "03",
    title: "Sorting & Preparation",
    description: "Volunteers inspect, categorize, and package items with care to ensure dignity and quality.",
  },
  {
    step: "04",
    title: "Direct Handover & Impact",
    description: "Field distribution directly to beneficiaries, followed by shared reflections and learning.",
  },
];
