// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';


// Tests for isPhoneNumber
describe('isPhoneNumber', () => {
  test('valid phone number with dashes', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });
  test('valid phone number with parentheses and space', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });
  test('invalid phone number with letters', () => {
    expect(isPhoneNumber('123-456-ABCD')).toBe(false);
  });
  test('invalid phone number format', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
  });
});

// Tests for isEmail
describe('isEmail', () => {
  test('valid email', () => {
    expect(isEmail('example@test.com')).toBe(true);
  });
  test('valid email with underscore', () => {
    expect(isEmail('ex_ample@test.com')).toBe(true);
  });
  test('invalid email without @ symbol', () => {
    expect(isEmail('example.com')).toBe(false);
  });
  test('invalid email with multiple dots', () => {
    expect(isEmail('example..test@test.com')).toBe(false);
  });
});

// Tests for isStrongPassword
describe('isStrongPassword', () => {
  test('valid strong password', () => {
    expect(isStrongPassword('A1b2c3')).toBe(true);
  });
  test('valid strong password with underscore', () => {
    expect(isStrongPassword('Abc_123')).toBe(true);
  });
  test('invalid password (too short)', () => {
    expect(isStrongPassword('Ab1')).toBe(false);
  });
  test('invalid password (special character)', () => {
    expect(isStrongPassword('Abc*123')).toBe(false);
  });
});

// Tests for isDate
describe('isDate', () => {
  test('valid date', () => {
    expect(isDate('12/31/2020')).toBe(true);
  });
  test('valid date with single digits', () => {
    expect(isDate('1/1/2020')).toBe(true);
  });
  test('invalid date with bad format', () => {
    expect(isDate('2020/12/31')).toBe(false);
  });
  test('invalid date with letters', () => {
    expect(isDate('December 31, 2020')).toBe(false);
  });
});

// Tests for isHexColor
describe('isHexColor', () => {
  test('valid hex color (6 digits)', () => {
    expect(isHexColor('#1A2B3C')).toBe(true);
  });
  test('valid hex color (3 digits)', () => {
    expect(isHexColor('#ABC')).toBe(true);
  });
  test('invalid hex color (wrong characters)', () => {
    expect(isHexColor('#1X2Y3Z')).toBe(false);
  });
  test('invalid hex color (too long)', () => {
    expect(isHexColor('#1234567')).toBe(false);
  });
});


