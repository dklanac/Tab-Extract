/**
 * Service responsible for window operations
 */
export class WindowService {
  constructor(chromeWindowsAPI) {
    this.windowsAPI = chromeWindowsAPI;
  }

  async createWindow(options) {
    return this.windowsAPI.create(options);
  }
}
