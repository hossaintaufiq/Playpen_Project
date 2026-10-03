import type { NewsTicker } from "@/lib/cms/types";

export function formatNewsTickerMessage(ticker: NewsTicker) {
  const phones = ticker.phones.join(", ");
  return `Playpen offers admission for the academic year (${ticker.academicYear}) for ${ticker.level}. Kindly contact ${phones}. [During ${ticker.hours}]. ${ticker.formsNote}`;
}

export function formatNoticeDate(date: string) {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
