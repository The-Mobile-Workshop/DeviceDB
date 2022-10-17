import { readFileSync, writeFileSync, existsSync } from 'fs';
import hash from './hash';

const dbFilePath = process.env.DB || './db.json';

function open(): any {
  return JSON.parse(readFileSync(dbFilePath, { encoding: 'utf-8' }));
}

function save(db: any) {
  writeFileSync(dbFilePath, JSON.stringify(db));
}

function createIfNotExist() {
  setInterval(() => {
    if (!existsSync(dbFilePath))
      writeFileSync(
        dbFilePath,
        JSON.stringify({ _secrets: { adminPassword: hash('secret') } }),
      );
  }, 1000);
}

export { open, save, createIfNotExist };
export default { open, save, createIfNotExist };
