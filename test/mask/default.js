import makeTestSuite from '@zoroaster/mask'
import paddys from '../../src'

const ts = makeTestSuite('test/result/index', {
  getResults(input) {
    const res = paddys(input, 10)
    return res.replace(/ /g, '_')
  },
})

export const width = makeTestSuite('test/result/options/width', {
  getResults(input) {
    const res = paddys(input, { width: 5 })
    return res.replace(/ /g, '_')
  },
})

export default ts