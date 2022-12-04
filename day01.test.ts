import {describe, expect, test} from '@jest/globals';
import { GiftWrappingMachine } from "./day01";

const wrapped = new GiftWrappingMachine();

describe('GiftWrappingMachine module', () => {
  test('return type', () => {
    expect(wrapped.wrapping2(['book', 'game', 'socks'])).toBeInstanceOf(Array);
  });
  test('Wrap my gifts 1', () => {
    expect(wrapped.wrapping(['book', 'game', 'socks']))
      .toStrictEqual(
        ["******\n*book*\n******","******\n*game*\n******","*******\n*socks*\n*******"]
      );
  });
  test('Wrap my gifts 2', () => {
    expect(wrapped.wrapping(['midu']))
      .toStrictEqual(
        ["******\n*midu*\n******"]
      );
  });
  test('Wrap my gifts 3', () => {
    expect(wrapped.wrapping(['a']))
      .toStrictEqual(
        ["***\n*a*\n***"]
      );
  });
  test('Wrap my gifts 4', () => {
    expect(wrapped.wrapping([]))
      .toStrictEqual(
        []
      );
  });
});