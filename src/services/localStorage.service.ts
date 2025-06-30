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

  /**
   * Removes an item from the local storage.
   * @param key Name of the key
   */
  removeItem(key: string): void {
    localStorage.removeItem(key);
  },
};

export default LocalStorageService;
