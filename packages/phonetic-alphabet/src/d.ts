import { AlphabetInterface, AlphabetType } from './types'

export class D implements AlphabetInterface {
  discriminant: AlphabetType = 'd';
}
/**
 * Pedantic example for D
 */
export const d = () => new D();

