/* start example */
/* yarn example/ */
import paddys from '../src'

const res = paddys(
  `Just stop your wandering,
Look penetratingly into your inherent nature,
And, concentrating your spiritual energy,
Sit in zazen
And break through.`
)
/* end example */
.replace(/( +)$/gm, ({ length }) => '_'.repeat(length))
console.log(res)