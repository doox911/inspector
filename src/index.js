import typeIs from './helpers/typeIs';

/**
 * @description Checks that the type of the argument
 * and the expected type are equal.
 * If there is no match, throws a custom exception.
 * @param {*} variable
 * @param {string} type
 * @param {string} message
 * @param {Class} Exception
 * @return {Inspector}
 * @private
 */
const _throwIfInvalid = (variable, type, message, Exception) => {
  if (typeIs(variable) !== type) {
    throw new Exception(message);
  }

  return Inspector;
};

/**
 * @description Class of checking and throwing a custom exception.
 */
export default class Inspector {
  /**
   * @param {*} variable
   * @param {string} message
   * @param {Object} Exception
   * @return {Inspector}
   */
  static isNumber(variable, message, Exception = Error) {
    return _throwIfInvalid(variable, 'Number', message, Exception);
  }
  /**
   * @param {*} variable
   * @param {string} message
   * @param {Object} Exception
   * @return {Inspector}
   */
  static isBigInt(variable, message, Exception = Error) {
    return _throwIfInvalid(variable, 'BigInt', message, Exception);
  }
  /**
   * @param {*} variable
   * @param {string} message
   * @param {Object} Exception
   * @return {Inspector}
   */
  static isString(variable, message, Exception = Error) {
    return _throwIfInvalid(variable, 'String', message, Exception);
  }
  /**
   * @param {*} variable
   * @param {string} message
   * @param {Object} Exception
   * @return {Inspector}
   */
  static isBoolean(variable, message, Exception = Error) {
    return _throwIfInvalid(variable, 'Boolean', message, Exception);
  }
  /**
   * @param {*} variable
   * @param {string} message
   * @param {Object} Exception
   * @return {Inspector}
   */
  static isNull(variable, message, Exception = Error) {
    return _throwIfInvalid(variable, 'Null', message, Exception);
  }
  /**
   * @param {*} variable
   * @param {string} message
   * @param {Object} Exception
   * @return {Inspector}
   */
  static isUndefined(variable, message, Exception = Error) {
    return _throwIfInvalid(variable, 'Undefined', message, Exception);
  }
  /**
   * @param {*} variable
   * @param {string} message
   * @param {Object} Exception
   * @return {Inspector}
   */
  static isArray(variable, message, Exception = Error) {
    return _throwIfInvalid(variable, 'Array', message, Exception);
  }
  /**
   * @param {*} variable
   * @param {string} message
   * @param {Object} Exception
   * @return {Inspector}
   */
  static isFunction(variable, message, Exception = Error) {
    return _throwIfInvalid(variable, 'Function', message, Exception);
  }
  /**
   * @param {*} variable
   * @param {string} message
   * @param {Object} Exception
   * @return {Inspector}
   */
  static isSymbol(variable, message, Exception = Error) {
    return _throwIfInvalid(variable, 'Symbol', message, Exception);
  }
}

