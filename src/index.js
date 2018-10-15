/**
 * Pad Strings.
 * @param {string} [string] The string to pad.
 * @param {number} [width] The width to which to pad.
 */
const paddys = (string, width) => {
  const d = Math.max(width - string.length, 0)
  const p = ' '.repeat(d)
  const s = `${string}${p}`
  return s
}

export default paddys

/* documentary types/index.xml */
/**
 * @typedef {Object} Config Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} text A text to return.
 */
