import fs from "node:fs";
import path from "node:path";

/**
 * Server-only. Returns true when a file referenced in a data file really exists in /public.
 * This is how the site hides "View Certificate" or thumbnails instead of showing broken links.
 */
export function publicFileExists(publicPath?: string): boolean {
  if (!publicPath || !publicPath.startsWith("/")) return false;
  try {
    return fs.existsSync(path.join(process.cwd(), "public", publicPath));
  } catch {
    return false;
  }
}
