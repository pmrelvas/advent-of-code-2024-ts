import { runSolution } from '../utils.ts';
import { extractList } from './utils.ts';

/** provide your solution as the return of this function */
export async function day1a(data: string[]) {
  console.log('input: ', data);

  const leftArr = extractList(data, 0).sort();
  console.log('left: ', leftArr);
  const rightArr = extractList(data, 1).sort();
  console.log('right: ', rightArr);

  return calculateDistance(leftArr, rightArr);
}

function calculateDistance(leftArr: number[], rightArr: number[]): number {
  if (leftArr.length != rightArr.length) {
    return 0;
  }

  let distances = [];
  for (let i = 0; i < leftArr.length; i++) {
    distances.push(Math.abs(rightArr[i] - leftArr[i]));
  }

  return distances.reduce((acc, currValue) => acc + currValue, 0);
}

await runSolution(day1a);
