var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  NobodyWantsToDoExtraHoursAtWork: () => NobodyWantsToDoExtraHoursAtWork
});
class NobodyWantsToDoExtraHoursAtWork {
  countHours(year, holidays) {
    let extraHours = 0;
    holidays.forEach((date) => {
      let concatDate = new Date(year.toString().concat("/" + date));
      const day = concatDate.getDay();
      console.log(day);
      if (day in [1, 2, 3, 4, 5]) {
        extraHours += 2;
      }
    });
    return extraHours;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  NobodyWantsToDoExtraHoursAtWork
});
//# sourceMappingURL=day02.js.map
