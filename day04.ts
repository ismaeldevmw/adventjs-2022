interface Box {
  l: number; // length
  w: number; // width
  h: number; // height
}

type BoxType = Box;

export class BoxInsideABoxAndAnother {

  fitsInOneBox(boxes: Array<BoxType>): boolean {
    return boxes.sort((b1, b2) => b1.l - b2.l).every((box, i) => i === 0 || box.l > boxes[i - 1].l && box.w > boxes[i - 1].w && box.h > boxes[i - 1].h)
  }

  itFitsIntoAnotherBox(element: Box, index: number, array: Array<Box>) {
    return index === 0 || element.l > array[index - 1].l && element.w > array[index - 1].w && element.h > array[index - 1].h
  }

  fitsInOneBox3(boxes: Array<BoxType>): boolean {
    let sortBoxes = boxes.sort((a, b) => a.l - b.l);
    let result: boolean = false;

    result = sortBoxes.every(this.itFitsIntoAnotherBox)
    return result;

  }

  fitsInOneBox1(boxes: Array<BoxType>): boolean {
    let sortBoxes = boxes.sort((a, b) => a.l - b.l);

    for (let i = 1; i < sortBoxes.length; i++) {
      let compareLength = sortBoxes[i].l > sortBoxes[i - 1].l;
      let compareWidth = sortBoxes[i].w > sortBoxes[i - 1].w;
      let compareHeight = sortBoxes[i].h > sortBoxes[i - 1].h;

      if (compareLength && compareWidth && compareHeight) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }

  fitsInOneBox2(boxes: Array<BoxType>): boolean {
    for (let i = 0; i < boxes.length - 1; i++) {
      if ((boxes[i].l >= boxes[i + 1].l) !== (boxes[i].w >= boxes[i + 1].w) || (boxes[i].l >= boxes[i + 1].l) !== (boxes[i].h >= boxes[i + 1].h)) {
        return false;
      }
    }
    return true;
  }


}