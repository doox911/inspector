const Inspector = require('./index');

/**
 * Parent Exception
 */
class DefaultException extends Error {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}

/**
 * @description Test exception
 */
class MyCustomException extends DefaultException {
  /**
   * @param {string} message
   */
  constructor(message) {
    super(message);
  }
}

/**
 * @description for testing
 */
function testFunction() {}

test('Test isNumber', () => {
  expect(Inspector.isNumber(1, 'My message', MyCustomException)).toBe(Inspector);
  try {
    Inspector.isNumber('', 'My message', MyCustomException);
  } catch (e) {
    expect(e).toBeInstanceOf(MyCustomException);
  }
  try {
    Inspector.isNumber(false, 'My message', MyCustomException);
  } catch (e) {
    expect(e).toBeInstanceOf(MyCustomException);
  }
  try {
    Inspector.isNumber(undefined, 'My message', MyCustomException);
  } catch (e) {
    expect(e).toBeInstanceOf(MyCustomException);
  }
  try {
    Inspector.isNumber(null, 'My message', MyCustomException);
  } catch (e) {
    expect(e).toBeInstanceOf(MyCustomException);
  }
  try {
    Inspector.isNumber([], 'My message', MyCustomException);
  } catch (e) {
    expect(e).toBeInstanceOf(MyCustomException);
  }
  try {
    Inspector.isNumber({}, 'My message', MyCustomException);
  } catch (e) {
    expect(e).toBeInstanceOf(MyCustomException);
  }
  try {
    Inspector.isNumber(testFunction, 'My message', MyCustomException);
  } catch (e) {
    expect(e).toBeInstanceOf(MyCustomException);
  }
  try {
    Inspector.isNumber(BigInt(11), 'My message', MyCustomException);
  } catch (e) {
    expect(e).toBeInstanceOf(MyCustomException);
  }
});
