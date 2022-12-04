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
var import_day01 = __toModule(require("./day01"));
const wrapped = new import_day01.GiftWrappingMachine();
(0, import_globals.describe)("GiftWrappingMachine module", () => {
  (0, import_globals.test)("return type", () => {
    (0, import_globals.expect)(wrapped.wrapping2(["book", "game", "socks"])).toBeInstanceOf(Array);
  });
  (0, import_globals.test)("Wrap my gifts 1", () => {
    (0, import_globals.expect)(wrapped.wrapping(["book", "game", "socks"])).toStrictEqual(["******\n*book*\n******", "******\n*game*\n******", "*******\n*socks*\n*******"]);
  });
  (0, import_globals.test)("Wrap my gifts 2", () => {
    (0, import_globals.expect)(wrapped.wrapping(["midu"])).toStrictEqual(["******\n*midu*\n******"]);
  });
  (0, import_globals.test)("Wrap my gifts 3", () => {
    (0, import_globals.expect)(wrapped.wrapping(["a"])).toStrictEqual(["***\n*a*\n***"]);
  });
  (0, import_globals.test)("Wrap my gifts 4", () => {
    (0, import_globals.expect)(wrapped.wrapping([])).toStrictEqual([]);
  });
});
//# sourceMappingURL=day01.test.js.map
