import { BaseDirectory, writeTextFile, readTextFile } from '@tauri-apps/api/fs';

export function makeSaveSystem(saveFileName) {
  return {
    data: {},
    async save() {
      await writeTextFile(saveFileName, JSON.stringify(this.data), {
        dir: BaseDirectory.AppLocalData,
      });
    },
    async load() {
      console.log('loading');
      try {
        this.data = JSON.parse(
          await readTextFile(saveFileName, { dir: BaseDirectory.AppLocalData })
        );
      } catch (err) {
        this.data = {};
      }
    },
  };
}

export const saveSystem = makeSaveSystem('save.json');
