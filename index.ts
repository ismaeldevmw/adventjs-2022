import { GiftWrappingMachine } from "./day01";

class Main {

  main(args?: string[]) {
    const gifts = ['book', 'game', 'socks']

    const wrapped = new GiftWrappingMachine();
    const result = wrapped.wrapping2(gifts)
    console.log(result);
  }

}

const program = new Main()
program.main()