var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var import_globals = __toModule(require("@jest/globals"));
var import_day02 = __toModule(require("./day02"));
const program = new import_day02.NobodyWantsToDoExtraHoursAtWork();
(0, import_globals.describe)("Count extra hours module", () => {
  (0, import_globals.test)("Return type", () => {
    (0, import_globals.expect)(typeof program.countHours(2022, ["01/06", "04/01", "12/25"])).toBe("number");
  });
  (0, import_globals.test)("There is not holidays sent", () => {
    (0, import_globals.expect)(program.countHours(2022, [])).toBe(0);
  });
  (0, import_globals.test)("Not count holidays", () => {
    (0, import_globals.expect)(program.countHours(2022, ["12/03", "12/04", "12/10"])).toBe(0);
  });
});
//# sourceMappingURL=day02.test.js.map
