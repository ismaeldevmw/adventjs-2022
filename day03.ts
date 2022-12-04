export default class HowManyPacksOfGiftsCanSantaCarry {
  distributeGifts(packOfGifts: Array<string>, reindeers:Array<string>): number {
    let packWeights: number = 0;
    for (let pack of packOfGifts) {
      packWeights += pack.length;
    }
    
    let reindeersCanCarry = 0;
    for (let reindeer of reindeers) {
      reindeersCanCarry += reindeer.length * 2;
    }
  
    return (reindeersCanCarry / packWeights | 0);
  }
}