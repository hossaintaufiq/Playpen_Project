import { getGalleryEventsFromFolders, writePublicGalleryData } from "../src/lib/school-images";

async function main() {
  const events = await getGalleryEventsFromFolders();
  await writePublicGalleryData(events);
  const images = events.reduce((n, e) => n + e.images.length, 0);
  console.log(`Cached ${events.length} events / ${images} images`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
