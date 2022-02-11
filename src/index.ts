import { checkSubmodule } from './checkSubmodule';

export function main() {
  if (!checkSubmodule()) {
    process.exit(1);
  }
}

main();