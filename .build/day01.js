var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  GiftWrappingMachine: () => GiftWrappingMachine
});
class GiftWrappingMachine {
  wrapping(gifts) {
    const wrappedGifts = gifts.map((item) => {
      const length = item.length + 2;
      const wrap = "*".repeat(length);
      return wrap + "\n*" + item + "*\n" + wrap;
    });
    return wrappedGifts;
  }
  wrapping2(gifts) {
    const giftsArr = [];
    for (let gift of gifts) {
      const wrapper = "*".repeat(gift.length + 2);
      giftsArr.push(`${wrapper}
*${gift}*
${wrapper}`);
    }
    return giftsArr;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  GiftWrappingMachine
});
//# sourceMappingURL=day01.js.map
