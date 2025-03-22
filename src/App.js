import { TabService } from "./services/TabService.js";
import { TabMatcher } from "./services/TabMatcher.js";
import { WindowService } from "./services/WindowService.js";
import { OmniboxController } from "./controllers/OmniboxController.js";

/**
 * Main application controller that initializes and connects all components
 */
export class App {
  constructor() {
    this.initialize();
  }

  initialize() {
    // Initialize services
    const tabService = new TabService(chrome.tabs);
    const windowService = new WindowService(chrome.windows);
    const tabMatcher = new TabMatcher();

    // Initialize controllers
    new OmniboxController(tabMatcher, tabService, windowService);

    console.log("TabExtract initialized successfully");
  }
}
