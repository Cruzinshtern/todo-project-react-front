const LocalStorageService = {
  /**
   * Stores a value in the local storage.
   * @param key Name of the key
   * @param value Name of thevalue
   */
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  },

  /**
   * Gets a value from the local storage.
   * @param key Name of the key
   * @returns Value from the local storage
   */
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  },
};

export default LocalStorageService;
