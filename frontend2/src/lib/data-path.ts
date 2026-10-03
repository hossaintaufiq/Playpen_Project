/**
 * Writable runtime data dir for API routes.
 * Avoid path.join(process.cwd(), ...) — Turbopack NFT-traces the whole repo
 * (including ~1GB of public images) and Vercel deploys fail size limits.
 */
export function getAppDataDir() {
  if (process.env.PLAYPEN_DATA_DIR) {
    return process.env.PLAYPEN_DATA_DIR;
  }
  if (process.env.VERCEL) {
    return "/tmp/playpen-data";
  }
  // Relative path resolves against cwd at runtime without static NFT expansion.
  return "data";
}

export function getDataFilePath(fileName: string) {
  return `${getAppDataDir()}/${fileName}`;
}
