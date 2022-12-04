import { describe, test, expect } from "@jest/globals";
import HowManyPacksOfGiftsCanSantaCarry from "./day03";

const program = new HowManyPacksOfGiftsCanSantaCarry;

describe("HowManyPacksOfGiftsCanSantaCarry module", () => {
  test("Test: return type", () => {
    expect(typeof(program.distributeGifts([], []))).toBe("number");
  });
  test("Test: distributeGifts(['a', 'b', 'c'], ['d', 'e'])", () => {
    expect(program.distributeGifts(['a', 'b', 'c'], ['d', 'e'])).toBe(1);
  });
  test("Test: it should return 0 if reindeers can't carry any pack:", () => {
    expect(program.distributeGifts(['videogames', 'console'], ['midu'])).toBe(0);
  });
  test("Test: distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])", () => {
    expect(program.distributeGifts(['game', 'videoconsole', 'computer'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])).toBe(5);
  });
  test("Test: distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])", () => {
    expect(program.distributeGifts(['music'], ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd'])).toBe(26);
  });
});