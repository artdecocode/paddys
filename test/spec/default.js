import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import paddys from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof paddys, 'function')
  },
  // async 'calls package without error'() {
  //   await paddys()
  // },
  // async 'gets a link to the fixture'({ FIXTURE }) {
  //   const res = await paddys({
  //     text: FIXTURE,
  //   })
  //   ok(res, FIXTURE)
  // },
}

export default T