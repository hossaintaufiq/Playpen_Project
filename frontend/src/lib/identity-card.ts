export const identityCardIntro =
  "Every student gets an ID Card after getting admission at Playpen.";

export const identityCardDailyWear =
  "They must wear it every day while they are in the school premises.";

export const identityCardReplacement =
  "Lost / damaged ID cards must be replaced.";

export const identityCardPolicies = [
  {
    title: "Issued on Admission",
    text: identityCardIntro,
  },
  {
    title: "Daily Requirement",
    text: identityCardDailyWear,
  },
  {
    title: "Replacement Policy",
    text: identityCardReplacement,
  },
] as const;
