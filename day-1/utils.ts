export function extractList(data: string[], index: number): number[] {
  return data
    .reduce((acc, currValue) => {
      if (!currValue.trim()) {
        return acc;
      }
      const value = Number(currValue.split('   ')[index]);
      if (!isNaN(value)) {
        acc.push(value);
      }
      return acc;
    }, []);
}

