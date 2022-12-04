export class GiftWrappingMachine {
  
  wrapping(gifts: Array<String>): Array<String> {
    const wrappedGifts: Array<String> = gifts.map(item => {
      const length: number = item.length + 2;
      const wrap: String = "*".repeat(length)
      return wrap + "\n*" + item + "*\n" + wrap;
    })
    
    return wrappedGifts;
  }

  wrapping2(gifts: Array<String>): Array<String> {
    const giftsArr: Array<String> = [];

    for(let gift of gifts) {
      const wrapper: String = "*".repeat(gift.length + 2);
      giftsArr.push(`${wrapper}\n*${gift}*\n${wrapper}`);
    }
  
    return giftsArr
  }
  
}
