import { describe, expect, test } from "@jest/globals";
import { NobodyWantsToDoExtraHoursAtWork } from "./day02";

const program = new NobodyWantsToDoExtraHoursAtWork();

describe("Count extra hours module", () => {
  test("Return type", () => {
    expect(typeof(program.countHours(2022, ['01/06', '04/01', '12/25']))).toBe("number");
  });
  test("There is not holidays sent", () => {
    expect(program.countHours(2022, [])).toBe(0);
  });
  test("Not count holidays", () => {
    expect(program.countHours(2022, ['12/03', '12/04', '12/10'])).toBe(0);
  });
  test("Count extra hours", () => {
    expect(program.countHours(2022, ['01/06', '04/01', '12/25'])).toBe(4);
  });
});