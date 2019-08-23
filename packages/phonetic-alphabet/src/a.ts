import { AlphabetInterface, AlphabetType } from './types'

export class A implements AlphabetInterface {
  discriminant: AlphabetType = 'a';
}
/**
 * Pedantic example for A
 */
export const a = () => new A();

