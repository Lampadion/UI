import { invoke } from '@tauri-apps/api/core';
import type { AppConfig } from './api.d';

let cache: AppConfig | null = null;

export async function loadConfig(): Promise<AppConfig> {
  const cfg = await invoke<AppConfig>('load_config');
  cache = cfg;
  return cfg;
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

export function clearConfigCache() {
  cache = null;
}
