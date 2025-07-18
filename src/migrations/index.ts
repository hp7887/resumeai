import * as migration_20250613_121501 from './20250613_121501';

export const migrations = [
  {
    up: migration_20250613_121501.up,
    down: migration_20250613_121501.down,
    name: '20250613_121501'
  },
];
