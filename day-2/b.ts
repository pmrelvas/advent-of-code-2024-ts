import { runSolution } from '../utils.ts';
import { extractSamples } from './utils.ts';

type Direction = 'asc' | 'desc' | 'flat';
const MIN_GAP = 1;
const MAX_GAP = 3;

/** provide your solution as the return of this function */
export async function day2a(data: string[]) {
  console.log(data);

  const samples = extractSamples(data);
  console.log('samples: ', samples);

  return samples.reduce((acc, currVal) => {
    if (isValid(currVal)) {
      return acc + 1;
    }

    console.log('sublevels: ', extractSubLevels(currVal));
    acc += extractSubLevels(currVal).some(subLevel => isValid(subLevel)) ? 1 : 0;
    return acc;
  }, 0);
}

function extractSubLevels(sample: number[]): number[][] {
  const subLevels = [];
  for (let i = 0; i < sample.length; i++) {
    const temp = [...sample];
    temp.splice(i, 1);
    subLevels.push(temp);
  }
  return subLevels;
}


function calculateDirection(previousVal: number, nextVal: number): Direction {
  if (nextVal - previousVal > 0) {
    return 'asc';
  } else if (nextVal - previousVal < 0) {
    return 'desc';
  }
  return 'flat';
}

function isValid(sample: number[]): boolean {
  const originalDirection = calculateDirection(sample[0], sample[1]);
  for (let i = 0; i < sample.length - 1; i++) {
    const direction = calculateDirection(sample[i], sample[i + 1]);
    const gap = Math.abs(sample[i + 1] - sample[i]);
    if (direction !== originalDirection || gap < MIN_GAP || gap > MAX_GAP) {
      return false;
    }
  }
  return true;
}

await runSolution(day2a);
