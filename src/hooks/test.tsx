import { absFrequency, chunkArray, cumulativeAbsFrequency } from '@/lib/utils'

export const data = [
  1.09, 1.74, 1.58, 2.11, 1.64, 1.79, 1.37, 1.75, 1.92, 1.47, 2.03, 1.86, 0.72,
  2.46, 1.93, 1.63, 2.31, 1.97, 1.7, 1.9, 1.69, 1.88, 1.4, 2.37, 1.79, 0.85,
  2.17, 1.68, 1.85, 2.08, 1.64, 1.75, 2.28, 1.24, 2.55, 1.51, 1.82, 1.67, 2.09,
  1.69
]

export function useSimpleTableData(data: number[]) {
  const chunkSize = 8;
  
  // Sort and chunk the data
  const sortedChunks = chunkArray([...data].sort((a, b) => a - b), chunkSize);
  
  // Calculate frequencies and cumulative frequencies
  const frequencyMap = absFrequency(sortedChunks);
  const keys = Array.from(frequencyMap.keys());
  const frequencies = Array.from(frequencyMap.values());
  
  const totalFrequency = frequencies.reduce((acc, cur) => acc + cur, 0);
  
  // Calculate relative and cumulative relative frequencies
  const relativeFrequencies = frequencies.map(freq => freq / totalFrequency);
  const cumulativeFrequency = cumulativeAbsFrequency(frequencies);
  const cumulativeRelativeFrequency = cumulativeAbsFrequency(relativeFrequencies);

  // Build the result array
  return keys.map((key, index) => ({
    x: key,
    fi: frequencies[index],
    Fi: cumulativeFrequency[index],
    hi: relativeFrequencies[index],
    Hi: cumulativeRelativeFrequency[index]
  }));
}
