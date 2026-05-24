import { invoke } from '@tauri-apps/api/core';

// Draft
export async function getVersion(): Promise<string> {
  return await invoke('get_version');
}
