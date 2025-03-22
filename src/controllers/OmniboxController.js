/**
 * Controller for handling omnibox interactions
 */
export class OmniboxController {
  constructor(tabMatcher, tabService, windowService) {
    this.tabMatcher = tabMatcher;
    this.tabService = tabService;
    this.windowService = windowService;

    this.setupListeners();
  }

  setupListeners() {
    chrome.omnibox.onInputChanged.addListener((text, suggest) =>
      this.handleInputChanged(text, suggest)
    );

    chrome.omnibox.onInputEntered.addListener((text) =>
      this.handleInputEntered(text)
    );
  }

  async handleInputChanged(text, suggest) {
    const matchingTabs = await this.tabMatcher.findMatchingTabs(
      text,
      this.tabService
    );

    const suggestionText =
      matchingTabs.length < 1
        ? "0 tabs matching. Enter another keyword or press ESC to cancel."
        : `${matchingTabs.length} tabs matching. Press enter to move them to a new window.`;

    suggest([{ content: " ", description: suggestionText }]);
  }

  async handleInputEntered(text) {
    const matchingTabs = await this.tabMatcher.findMatchingTabs(
      text,
      this.tabService
    );

    if (matchingTabs.length < 1 || text === "") {
      alert(
        `No matches found for the keywords "${text}".
Note: You do not need to press down to select a suggestion. Just press enter after entering keywords.`
      );
      return;
    }

    try {
      const newWindow = await this.windowService.createWindow({
        type: "normal",
      });
      await this.tabService.moveTabs(matchingTabs, {
        windowId: newWindow.id,
        index: -1,
      });
      await this.tabService.removeTab(
        newWindow.tabs[newWindow.tabs.length - 1].id
      );
    } catch (error) {
      console.error("Error managing tabs:", error);
    }
  }
}
