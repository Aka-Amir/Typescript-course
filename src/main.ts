const ARRAY = [
  4, 8, 10, 18, 24, 28, 35, 36, 41, 49, 53, 55, 67, 69, 70, 74, 81, 87, 92, 99,
];

function sliceArray<T>(array: T[], from: number, to: number): T[] {
  const result: T[] = [];
  for (let i = from; i <= to; i++) {
    result.push(array[i]);
  }
  return result;
}

let cycle = 0;

function findIndex(searchingValue: number): number {
  let result: number = 0;
  let copiedArray = [...ARRAY];

  while (copiedArray.length > 1) {
    cycle++;
    const cursor = Math.floor(copiedArray.length / 2);
    const current = copiedArray[cursor];

    console.log(copiedArray.length, copiedArray.toString());

    if (current === searchingValue) {
      result += cursor;
      break;
    }

    if (searchingValue > current) {
      copiedArray = sliceArray(copiedArray, cursor, copiedArray.length - 1);
      result += cursor;
      continue;
    }

    copiedArray = sliceArray(copiedArray, 0, cursor - 1);
  }

  if (copiedArray.length === 1) {
    if (copiedArray[0] === searchingValue) result = 0;
    else throw new Error("Could not find index");
  }

  return result;
}

function test(...targets: number[]) {
  let avg = 0;
  for (const target of targets) {
    const b = findIndex(target);
    const a = ARRAY.indexOf(target);
    console.log(`Expected value: ${a}`);
    console.log(`Recieved value: ${b} CYCLE: ${cycle}`);
    console.assert(a === b);
    console.log("\n");
    avg += cycle;
    cycle = 0;
  }
  console.log("AVG: ", avg / targets.length);
}

test(...ARRAY);
