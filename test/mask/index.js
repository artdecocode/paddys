import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import paddys from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await paddys({
      text: input,
    })
    return res
  },
  context: Context,
})

export default ts