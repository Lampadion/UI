type layoutsOptions = {
  list: string[]; // QWERTY, AZERTY, ЙЦУКЕН, User-defined layouts
  overrideSystemLayouts: boolean;
  activeLayouts: {
    // script + it's layout: { "latin": "QWERTY", "cyrillic": "ЙЦУКЕН" } -> English uses QWERTY, Russian uses ЙЦУКЕН
    [key: string]: string;
  };
};

type bindingLayersOptions = {
  list: string[]; // User-defined bindings
  activeBindingLayers: string[];
};

type LaTeXOptions = {
  primaryMode: 'text' | 'math';
  useHotstrings: boolean; // When user type, for example, \AE, it will replaces with Æ ligature.
};

type HTMLOptions = {
  primaryMode: 'decimal' | 'hexadecimal';
  namedEntityPriority: boolean;
};

type IPAOptions = {
  useLatinCharacters: boolean; // Option for switching between Greek and Latin characters like Beta and Chi for IPA Input.
};

type unicodeResource =
  | 'Codepoints'
  | 'Compart'
  | 'Decodeunicode'
  | 'SymblCC'
  | 'Unicode Explorer'
  | 'Unicode Plus'
  | 'Util Unicode'
  | 'Wikipedia'
  | 'Wikipedia (en)'
  | 'Wiktionary'
  | 'Wiktionary (en)';

type unicodeResourceOptions = {
  resource: unicodeResource;
  useSystemLanguage: boolean;
};

type uiOptions = {
  theme: 'light' | 'dark';
  scripter: {
    selector: {
      itemsPerPage: number;
      itemsThreshold: number;
      columnsPerPage: number;
      useNumberKeys: boolean;
    };
  };
  compose: {
    showSuggestions: boolean;
    showFavorites: boolean;
    showAlternativeSequences: boolean;

    suggestionsLineLength: number;
    suggestionsLength: [number, number]; // suggestionsLength[1] * suggestionsLength[2]

    fontSize: number;
    fontFamily: string;
  };
};

type composeOptions = {
  activationKey: string;
  activationType: 'press' | 'doublePress' | 'hold';
  holdTime: number;

  // If entered sequece equals to existing sequence,
  // it will automatically send sequence’s character if true
  // or show suggestions if false and user will need to press “Enter” key to send found character
  sendCharacterImmediately: boolean;
};

export interface AppConfig {
  profile: string;
  autocheckUpdates: boolean;

  layouts: layoutsOptions;
  bindingLayers: bindingLayersOptions;

  LaTeX: LaTeXOptions;
  HTML: HTMLOptions;
  IPA: IPAOptions;

  selectedUnicodeResource: unicodeResourceOptions;

  ui: uiOptions;
  compose: composeOptions;
}
