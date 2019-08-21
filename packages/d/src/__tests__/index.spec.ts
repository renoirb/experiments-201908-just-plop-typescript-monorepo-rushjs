import { d } from '..';

describe('d', () => {
  it('constructor', () => {
    const result = d();
    expect(result.discriminant).toMatchSnapshot()
  });
});
