import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { getDateString } from "../util.ts";

Deno.test("getDateString() works correctly with single-digit date", () => {
  const date = new Date("2020-01-01");
  const result = getDateString(date);
  assertEquals(result, "01 January");
});

Deno.test("getDateString() works correctly with double-digit date", () => {
  const date = new Date("2020-01-31");
  const result = getDateString(date);
  assertEquals(result, "31 January");
});
