import {toFarsiNumber} from './ConvertToPersian';
import {handleSprateNumber} from './SeprateNumbers';
export const toSepratedFarsiNo=(number)=>toFarsiNumber(handleSprateNumber(number))