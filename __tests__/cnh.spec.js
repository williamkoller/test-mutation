const { canTakeDriverLicense } = require('../src/cnh');

describe('Calculate CNH', () => {
  it('should return false for people with less at 18 years', () => {
    expect(canTakeDriverLicense(15, 18)).toBe(false);
  });

  it('should past values must be of legal age', () => {
    expect(canTakeDriverLicense(19, 18)).toBe(true);
    expect(canTakeDriverLicense(18, 18)).toBe(true);
  });

  it('should throw an error if what is provided to the method cannot be bigger', () => {
    const messageThrow = 'Please check your input.';
    expect(() => {
      canTakeDriverLicense('', '16');
    }).toThrowError(messageThrow);

    expect(() => {
      canTakeDriverLicense([17, 18]);
    }).toThrowError(messageThrow);

    expect(() => {
      canTakeDriverLicense();
    }).toThrowError(messageThrow);

    expect(() => {
      canTakeDriverLicense({});
    }).toThrowError(messageThrow);
  });
});
