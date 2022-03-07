import {timeFormatter} from './utils';

describe('test time formatter', () => {
  it('should return MINUTEm SECONDS s', () => {
    let example = timeFormatter(90);
    return expect(example).toEqual(' 1m30s');
  });

  it('should return a negative whole number', () => {
    let example = timeFormatter(-40);
    return expect(example).toEqual('-40s');
  });
});
