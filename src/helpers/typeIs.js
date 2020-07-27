/**
 * Returns data type
 * @param {*} type
 * @return {string}
 */
module.exports = function typeIs(type) {
  return {}.toString.call(type).replace(']', '').split(' ')[1];
};
