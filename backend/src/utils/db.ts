import { readFileSync, writeFileSync, existsSync } from 'fs';

const dbFilePath = process.env.DB || './db.json';

function open(): any {
  return JSON.parse(readFileSync(dbFilePath, { encoding: 'utf-8' }));
}

function save(db: any) {
  writeFileSync(dbFilePath, JSON.stringify(db));
}

function createIfNotExist() {
  if (!existsSync(dbFilePath))
    writeFileSync(
      dbFilePath,
      JSON.stringify({ collections: { documents: {} } }),
    );
}

export { open, save, createIfNotExist };
export default { open, save, createIfNotExist };
