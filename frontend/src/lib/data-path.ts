import path from "path";

export function getAppDataDir() {
  const override = process.env.PLAYPEN_DATA_DIR;
  if (override) {
    return override;
  }

  if (process.env.VERCEL || process.env.NODE_ENV === "production") {
    return "/tmp/playpen-data";
  }

  return path.join(process.cwd(), "data");
}

export function getDataFilePath(fileName: string) {
  return path.join(getAppDataDir(), fileName);
}
