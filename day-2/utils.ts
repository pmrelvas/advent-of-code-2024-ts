export function  extractSamples(data: string[]) {
  return data.reduce((acc, currValue) => {
    if (currValue !== '') {
      acc.push(currValue.split(' ').map((x) => Number(x)));
    }
    return acc;
  }, []);
}
