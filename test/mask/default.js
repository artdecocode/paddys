import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import paddys from '../../src'

const ts = makeTestSuite('test/result', {
  getResults(input) {
    const res = paddys(input, 10)
    return res.replace(/ /g, '_')
  },
  context: Context,
})

export default ts