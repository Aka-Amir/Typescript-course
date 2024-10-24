import { createInterface } from "readline";

function readInput(question: string): Promise<string> {
  return new Promise((resolve) => {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(question, (answer) => {
      resolve(answer);
      rl.close();
    });
  });
}

const EMPTY = 0;
const X = 1;
const O = 2;

function printBoard(board: number[][]) {
  for (const row of board) {
    const rowText = row
      .map((item) => {
        switch (item) {
          case EMPTY:
            return " ";
          case X:
            return "X";
          case O:
            return "O";
          default:
            return "";
        }
      })
      .join(" | ");
    console.log(rowText);
    console.log(new Array(rowText.length).fill("-").join(""));
  }
}

async function main() {
  const array: number[][] = [
    [EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY],
  ];
}

main();
