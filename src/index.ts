import { clientManager } from "./clientManager";
import { shortcuts } from "./shortcuts";
import { signals } from "./signals";
import ToplevelManager from "./toplevelManager";

// @ts-ignore, KWin global
export const print: (s: any) => void = print || {};

ToplevelManager.addAll();
clientManager.addAll();
shortcuts.registerShortcuts();
signals.registerSignals();
