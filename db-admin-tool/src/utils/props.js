/* global CacheService, PropertiesService */

/**
 * Try to get cached value from CacheService by `propName`.
 * You can provide alternative function as second argument, to get value from another source
 * If there is no value, try use `fn`, to get value from
 *
 * @param {string} propName Property name
 * @param {function} fn Calls when no cached property name.
 * @param {*} expiration Cache expiration in second
 *
 * @returns value or `null`
 */
export function maybeCached(propName, fn = () => null, expiration = 3600) {
  const cached = CacheService.getScriptCache().get(propName);

  const value = cached || fn(propName);

  if (!cached && value) {
    CacheService.getScriptCache().put(propName, value, expiration);
  }
  return value;
}

export function resetCache(propName) {
  CacheService.getScriptCache().remove(propName);
}

/**
 * Try to get value from Properies service. Cache it, if success
 * @param {string} propName Property name
 * @returns value or `null`
 */
export function getProp(propName) {
  return maybeCached(propName, () => PropertiesService.getScriptProperties().getProperty(propName));
}

/**
 * Put value to Properies service and resetCache
 * @param {string} propName Property name
 * @param {string} value
 */
export function setProp(propName, value) {
  PropertiesService.getScriptProperties().setProperty(propName, value)
  const cached = CacheService.getScriptCache().get(propName);
  if (cached) {
    resetCache(propName)
  }
}
