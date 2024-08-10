import { BaseDirectory, writeTextFile } from '@tauri-apps/api/fs';

export function makeSaveSystem(saveFileName) {
  return {
    data: {},
    async save() {
      await writeTextFile(saveFileName, JSON.stringify(this.data), {
        dir: BaseDirectory.AppLocalData,
      });
    },
    async load() {
      try {
        this.data = JSON.parse(
          await readTextFile(saveFileName, { dir: BaseDirectory.AppLocalData })
        );
      } catch {
        this.data = {};
      }
    },
  };
}

export const saveSystem = makeSaveSystem('save.json');
