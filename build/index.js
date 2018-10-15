/**
 * Pad Strings.
 * @param {number} [width] The width to which to pad.
 * @param {string} [string] The string to pad.
 */
const pad = (width, string) => {
  const d = Math.max(width - string.length, 0)
  const p = ' '.repeat(d)
  const s = `${string}${p}`
  return s
}

/**
 * Pads the string so that each line is of equal width.
 * @param {string} [string] The string to pad.
 * @param {Config} [options] Options for the program.
 * @param {number} [options.width] The width to which to pad lines.
 * @example
 * import paddys from 'paddys'
 * const res = paddys(`test
t`)
  // test
  // t___
 */
const paddys = (string, options = {}) => {
  const {
    width,
  } = options
  const s = string.split('\n')
  const w = width || s.reduce((acc, { length: l }) => l > acc ? l : acc, 0)
  return s.map(pad.bind(null, w)).join('\n')
}

module.exports=paddys

/* documentary types/index.xml */
/**
 * @typedef {Object} Config Options for the program.
 * @prop {number} [width] The width to which to pad lines.
 */
