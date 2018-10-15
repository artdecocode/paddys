/* yarn example/ */
import paddys from '../src'

(async () => {
  const res = await paddys({
    text: 'example',
  })
  console.log(res)
})()