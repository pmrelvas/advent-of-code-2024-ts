import { runSolution } from '../utils.ts';
import { extractList } from './utils.ts';

/** provide your solution as the return of this function */
export async function day1b(data: string[]) {
  console.log('input: ', data);

  const leftArr = extractList(data, 0);
  console.log('left: ', leftArr);
  const rightArr = extractList(data, 1);
  console.log('right: ', rightArr);

  return calculateSimilarity(leftArr, rightArr);
}

function calculateSimilarity(leftArr: number[], rightArr: number[]): number {
  const similarityArr = leftArr.reduce((accLeft, currValueLeft) => {
    accLeft.push(
      currValueLeft * rightArr.reduce(
        (accRight, currValueRight) =>
          (accRight += currValueLeft === currValueRight ? 1 : 0),
        0
      )
    );
    return accLeft;
  }, []);
  return similarityArr.reduce((acc, currValue) => acc += currValue, 0);
}

await runSolution(day1b);
