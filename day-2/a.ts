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
    acc += isValid(currVal) ? 1 : 0;
    return acc;
  }, 0);
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
  if (originalDirection === 'flat') {
    return false;
  }
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
