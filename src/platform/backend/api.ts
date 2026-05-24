import { invoke } from '@tauri-apps/api/core';
import type { AppConfig } from './api.d';

let cache: AppConfig | null = null;
let inflightRequest: Promise<AppConfig> | null = null;

export async function loadConfig(): Promise<AppConfig> {
  if (!inflightRequest) {
    inflightRequest = invoke<AppConfig>('load_config')
      .then((cfg) => {
        cache = cfg;
        inflightRequest = null;
        return cfg;
      })
      .catch((err) => {
        inflightRequest = null;
        throw err;
      });
  }
  return inflightRequest;
}

export async function getConfig(): Promise<AppConfig> {
  if (cache) return cache;
  return loadConfig();
}

export async function saveConfig(config: AppConfig): Promise<void> {
  cache = config;
  await invoke('save_config', { config });
}

export async function patchConfig(patch: Partial<AppConfig>): Promise<AppConfig> {
  const updated = await invoke<AppConfig>('patch_config', { patch });
  cache = updated;
  return updated;
}

export function clearConfigCache(): void {
  cache = null;
  inflightRequest = null;
}
