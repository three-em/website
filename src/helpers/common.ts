export interface GlobalMean {
  [name: string]: number;
  highest: number;
}

const getAverage = (arr: Array<number>) =>
  arr.reduce((p, c) => p + c, 0) / arr.length;

export const fetchBenchmarks = async () => {
  const benchmarks = await fetch(
    "https://raw.githubusercontent.com/three-em/3em/main/tools/benchmarks/results.json"
  );
  return (await benchmarks.json()).results;
};

export const calculateGlobalMean = async (
  key1: string,
  key2: string
): Promise<GlobalMean> => {
  const benchmarks: Array<any> = await fetchBenchmarks();
  const key1BenchmarksMean: number =
    benchmarks.find(({ command }) => command.endsWith(key1))?.mean || 0;
  const key2BenchmarksMean: number =
    benchmarks.find(({ command }) => command.endsWith(key2))?.mean || 0;

  const highest = Math.max(key1BenchmarksMean, key2BenchmarksMean);

  return {
    sw: key1BenchmarksMean,
    js: key2BenchmarksMean,
    highest
  };
};

export const calculateHundredPercent = (val: number, highest: number) => {
  return (val * 100) / highest;
};
