import { describe, test, expect } from "@jest/globals";
import { BoxInsideABoxAndAnother } from "./day04";

const program = new BoxInsideABoxAndAnother();

describe("BoxInsideABoxAndAnother module", () => {
  test("Test: box fits into another - case 1", () => {
    expect(program.fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 }
    ])).toEqual(true);
  });
  test("Test: box fits into another - case 2", () => {
    expect(program.fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 }
    ])).toEqual(false);
  });
  test("Test: box fits into another - case 3", () => {
    expect(program.fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 }
    ])).toEqual(true);
  });
  test("Test: box fits into another - case 3", () => {
    expect(program.fitsInOneBox([
      { l: 4, w: 4, h: 3 },
      { l: 5, w: 5, h: 4 },
    ])).toEqual(true);
  });
});