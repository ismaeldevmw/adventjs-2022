export class NobodyWantsToDoExtraHoursAtWork {

  countHours(year: number, holidays: Array<string>): number {
    let extraHours: number = 0;

    holidays.forEach((date: string) => {
      let concatDate = new Date(year.toString().concat('/' + date));
      const day = concatDate.getDay();
      // console.log(new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(concatDate));
      if([1,2,3,4,5].includes(day)) {
        extraHours += 2;
      }
    });
    
    return extraHours;
  }
  
  countHours2(year: number, holidays: Array<string>): number {
    let extraHours= 0;

    for(let date of holidays) {
      const fullDate = year.toString().concat('/' + date)
      const newDate = new Date(fullDate);
      const day = newDate.getDay();
      
      if(day === 0 || day == 6) {
        continue;
      }
      else extraHours += 2;
    }
    
    return extraHours;
  }
  
  countHours3(year: number, holidays: Array<string>): number {
    let extraHours: number = 0;

    for(let date of holidays) {
      const day: number = new Date(year.toString().concat('/' + date)).getDay();
      
      if([1,2,3,4,5].includes(day)) {
        extraHours += 2;
      }
    }
    
    return extraHours;
  }
    
}