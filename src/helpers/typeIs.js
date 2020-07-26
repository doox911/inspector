/**
 * Returns data type
 * @param {*} type
 * @return {string}
 */
export default function typeIs(type) {
  return {}.toString.call(type).replace(']', '').split(' ')[1];
}
