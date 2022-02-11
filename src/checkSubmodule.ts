import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

/**
 * Check if the submodule is installed at the templates directory.
 * Return true if it is, false otherwise.
 */
export const checkSubmodule = (): Boolean => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const templatesPath = path.join(__dirname, '../address-formatting/conf');
  if (!fs.existsSync(templatesPath)) {
    console.error(
      `The address-formatting submodule is not installed at ${templatesPath}`
    );
    return false;
  }
  return true;
}