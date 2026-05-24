import * as tauri from './tauri';
import * as web from './web';

export const isTauri = '__TAURI_INTERNALS__' in window;

export const api = isTauri ? tauri : web;
