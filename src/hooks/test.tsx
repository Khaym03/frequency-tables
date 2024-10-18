import { absFrequency, chunckArray, cumulativeAbsFrequency } from '@/lib/utils'

export const data = [
  1.09, 1.74, 1.58, 2.11, 1.64, 1.79, 1.37, 1.75, 1.92, 1.47, 2.03, 1.86, 0.72,
  2.46, 1.93, 1.63, 2.31, 1.97, 1.7, 1.9, 1.69, 1.88, 1.4, 2.37, 1.79, 0.85,
  2.17, 1.68, 1.85, 2.08, 1.64, 1.75, 2.28, 1.24, 2.55, 1.51, 1.82, 1.67, 2.09,
  1.69
]

export function useSimpleTableData(data: number[]) {
  const chunckSize = 8
  // const chuncks = chunckArray(data, chunckSize)
  const sorted = [...data].sort((a, b) => a - b)
  const sortedChucnks = chunckArray(sorted, chunckSize)
  const hashmap = absFrequency(sortedChucnks)
  const keys = [...hashmap.keys()]
  const cumulativeFre = cumulativeAbsFrequency([...hashmap.values()])
  const totalhi = [...hashmap.values()].reduce((acc, cur) => acc + cur, 0)
  const hiArr = [...hashmap.values()].map(v => v / totalhi)
  const cumulativeHi = cumulativeAbsFrequency(hiArr)

  return keys.map((k, index) => {
    const val = hashmap.get(k) as number

    return {
      x: k,
      fi: val,
      Fi: cumulativeFre[index],
      hi: hiArr[index],
      Hi: cumulativeHi[index]
    }
  })
}
