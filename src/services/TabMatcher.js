/**
 * Service responsible for matching tabs based on keywords
 */
export class TabMatcher {
  matchesKeywords(keywords, tab) {
    return keywords.some(
      (keyword) =>
        tab.url.toLowerCase().includes(keyword) ||
        tab.title.toLowerCase().includes(keyword)
    );
  }

  async findMatchingTabs(text, tabService) {
    const keywords = text.toLowerCase().split(" ");

    if (keywords[0] === "") {
      return [];
    }

    const queryInfo = {
      pinned: false,
      status: "complete",
      windowType: "normal",
    };

    try {
      const tabs = await tabService.queryTabs(queryInfo);
      return tabs
        .filter((tab) => this.matchesKeywords(keywords, tab))
        .map((tab) => tab.id);
    } catch (error) {
      console.error("Error finding matching tabs:", error);
      return [];
    }
  }
}
