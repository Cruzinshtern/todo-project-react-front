/**
 * Helper function to ensure safe access to an object's property

 * @param obj object with fields to be handled
 * @param key key to be asserted
 * @returns asserted key
 */
export function getValueByKey<T extends object, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
