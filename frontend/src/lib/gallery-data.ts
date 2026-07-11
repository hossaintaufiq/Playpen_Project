export type GalleryCategory =
  | "All"
  | "Events"
  | "Sports"
  | "Academics"
  | "Arts"
  | "Celebrations"
  | "Campus";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption?: string;
};

export type GalleryEvent = {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, "All">;
  date: string;
  year: number;
  description: string;
  coverImage: string;
  images: GalleryImage[];
  /** Present on slim payloads so UI can show totals before full images load */
  imageCount?: number;
};

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Events",
  "Sports",
  "Academics",
  "Arts",
  "Celebrations",
  "Campus",
];

export const galleryEvents: GalleryEvent[] = [
  {
    id: "annual-sports-2024",
    title: "Annual Sports 2024",
    category: "Sports",
    date: "February 2024",
    year: 2024,
    description:
      "House competitions, track events, and team games brought the whole school together for a day of energy and sportsmanship.",
    coverImage: "/images/schools/middle.jpg",
    images: [
      { id: "as1", src: "/images/schools/middle.jpg", alt: "Annual sports opening ceremony", caption: "Opening ceremony" },
      { id: "as2", src: "/images/marquee/eca.jpg", alt: "Students at sports day", caption: "Track events" },
      { id: "as3", src: "/images/schools/junior.jpg", alt: "Team relay race", caption: "Relay race" },
    ],
  },
  {
    id: "annual-day-2024",
    title: "Annual Day 2024",
    category: "Events",
    date: "December 2024",
    year: 2024,
    description:
      "Performances, awards, and celebrations highlighting pupil achievement across every division.",
    coverImage: "/images/schools/elementary.jpg",
    images: [
      { id: "ad1", src: "/images/schools/elementary.jpg", alt: "Annual day stage performance", caption: "Stage performance" },
      { id: "ad2", src: "/images/schools/junior.jpg", alt: "Award ceremony", caption: "Award ceremony" },
      { id: "ad3", src: "/images/marquee/achievements.jpg", alt: "Prize distribution", caption: "Prize distribution" },
    ],
  },
  {
    id: "science-fair-2024",
    title: "Science Fair 2024",
    category: "Academics",
    date: "October 2024",
    year: 2024,
    description:
      "Pupils presented experiments and innovations across physics, chemistry, biology, and technology.",
    coverImage: "/images/schools/senior.jpg",
    images: [
      { id: "sf1", src: "/images/schools/senior.jpg", alt: "Science fair project display", caption: "Project displays" },
      { id: "sf2", src: "/images/marquee/achievements.jpg", alt: "Judges reviewing projects", caption: "Project judging" },
      { id: "sf3", src: "/images/marquee/faculty.jpg", alt: "Science faculty with students", caption: "Faculty support" },
    ],
  },
  {
    id: "cultural-programme-2024",
    title: "Cultural Programme",
    category: "Arts",
    date: "March 2024",
    year: 2024,
    description:
      "Music, dance, and drama performances celebrating creativity and cultural heritage.",
    coverImage: "/images/marquee/eca.jpg",
    images: [
      { id: "cp1", src: "/images/marquee/eca.jpg", alt: "Cultural dance performance", caption: "Dance performance" },
      { id: "cp2", src: "/images/marquee/alumni.jpg", alt: "Music ensemble", caption: "Music ensemble" },
      { id: "cp3", src: "/images/schools/elementary.jpg", alt: "Young performers on stage", caption: "Junior performers" },
    ],
  },
  {
    id: "independence-day-2024",
    title: "Independence Day",
    category: "Celebrations",
    date: "March 2024",
    year: 2024,
    description:
      "Flag hoisting, patriotic performances, and assemblies honouring the nation's history.",
    coverImage: "/images/schools/elementary.jpg",
    images: [
      { id: "id1", src: "/images/schools/elementary.jpg", alt: "Independence day assembly", caption: "School assembly" },
      { id: "id2", src: "/images/schools/middle.jpg", alt: "Flag hoisting ceremony", caption: "Flag hoisting" },
      { id: "id3", src: "/images/marquee/faculty.jpg", alt: "Faculty and students parade", caption: "Parade" },
    ],
  },
  {
    id: "eca-showcase-2023",
    title: "ECA Showcase",
    category: "Events",
    date: "November 2023",
    year: 2023,
    description:
      "Clubs and co-curricular groups displayed skills built throughout the year.",
    coverImage: "/images/marquee/student-services.jpg",
    images: [
      { id: "eca1", src: "/images/marquee/student-services.jpg", alt: "ECA club exhibition", caption: "Club exhibition" },
      { id: "eca2", src: "/images/marquee/eca.jpg", alt: "Debate club presentation", caption: "Debate club" },
      { id: "eca3", src: "/images/schools/junior.jpg", alt: "Art club display", caption: "Art club" },
    ],
  },
  {
    id: "cambridge-results-2024",
    title: "Cambridge Results Day",
    category: "Academics",
    date: "August 2024",
    year: 2024,
    description:
      "Senior pupils and families celebrated outstanding O and A Level achievements.",
    coverImage: "/images/schools/senior.jpg",
    images: [
      { id: "cr1", src: "/images/schools/senior.jpg", alt: "Results day celebration", caption: "Results celebration" },
      { id: "cr2", src: "/images/marquee/achievements.jpg", alt: "Top achievers", caption: "Top achievers" },
      { id: "cr3", src: "/images/marquee/alumni.jpg", alt: "Graduates with faculty", caption: "With faculty" },
    ],
  },
  {
    id: "campus-life",
    title: "Campus Life",
    category: "Campus",
    date: "Throughout 2024",
    year: 2024,
    description:
      "Everyday moments across classrooms, corridors, and outdoor spaces at Playpen.",
    coverImage: "/images/schools/middle.jpg",
    images: [
      { id: "cl1", src: "/images/schools/middle.jpg", alt: "School campus exterior", caption: "Campus view" },
      { id: "cl2", src: "/images/schools/junior.jpg", alt: "Classroom learning", caption: "In the classroom" },
      { id: "cl3", src: "/images/schools/elementary.jpg", alt: "Playground activities", caption: "Outdoor learning" },
      { id: "cl4", src: "/images/marquee/faculty.jpg", alt: "Faculty on campus", caption: "Our educators" },
    ],
  },
];

export function getAllGalleryImages() {
  return galleryEvents.flatMap((event) =>
    event.images.map((image) => ({
      ...image,
      eventId: event.id,
      eventTitle: event.title,
      category: event.category,
      date: event.date,
      year: event.year,
    }))
  );
}

export function getOverviewPhotos(limit = 8) {
  return galleryEvents.slice(0, limit).map((event) => ({
    id: `overview-${event.id}`,
    src: event.coverImage,
    alt: event.title,
    caption: event.title,
    eventTitle: event.title,
    category: event.category,
    date: event.date,
    year: event.year,
    eventId: event.id,
  }));
}
