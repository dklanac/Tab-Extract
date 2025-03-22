/**
 * Service responsible for tab-related operations
 */
export class TabService {
  constructor(chromeTabsAPI) {
    this.tabsAPI = chromeTabsAPI;
  }

  async queryTabs(queryOptions) {
    try {
      return await this.tabsAPI.query(queryOptions);
    } catch (error) {
      console.error("Error querying tabs:", error);
      return [];
    }
  }

  async moveTabs(tabIds, destination) {
    return this.tabsAPI.move(tabIds, destination);
  }

  async removeTab(tabId) {
    return this.tabsAPI.remove(tabId);
  }
}
