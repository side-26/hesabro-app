import { toFarsiNumber } from './ConvertToPersian'
import { handleSprateNumber } from './SeprateNumbers'
export const toSepratedFarsiNo = (number) => {
  if (number) return toFarsiNumber(handleSprateNumber(number))
  return
}
