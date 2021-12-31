export interface GlobalMean {
  [name: string]: number;
  highest: number;
}

const getAverage = (arr: Array<number>) =>
  arr.reduce((p, c) => p + c, 0) / arr.length;

export const fetchBenchmarks = async () => {
  const benchmarks = await fetch(
    "https://raw.githubusercontent.com/three-em/3em/main/data/benchmark.json"
  );
  return await benchmarks.json();
};

export const calculateGlobalMean = async (
  key1: string,
  key2: string
): Promise<GlobalMean> => {
  const benchmarks: Array<any> = await fetchBenchmarks();
  const key1BenchmarksMean = benchmarks.map(
    (item) => item.benchmark[key1]?.mean
  );
  const key2BenchmarksMean = benchmarks.map(
    (item) => item.benchmark[key2]?.mean
  );

  const highest = Math.max(...[...key1BenchmarksMean, ...key2BenchmarksMean]);

  return {
    [`${key1}`]: getAverage(key1BenchmarksMean),
    [`${key2}`]: getAverage(key2BenchmarksMean),
    highest
  };
};

export const calculateHundredPercent = (val: number, highest: number) => {
  return (val * 100) / highest;
};
