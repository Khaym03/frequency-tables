import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function absFrequency(nums: number[][]) {
  const acc = new Map<number, number>()

  nums.flat().forEach(n => {
    const value = acc.get(n)

    if (!value) acc.set(n, 1)
    else acc.set(n, value + 1)
  })

  return acc
}

export function cumulativeAbsFrequency(absFrequencyValues: number[]) {
  console.log(absFrequencyValues)
  const result = []
  let prev = 0

  for (let i = 0; i < absFrequencyValues.length; i++) {
    const current = prev + absFrequencyValues[i]
    result.push(current)
    prev = current
  }

  return result
}

export function chunckArray(nums: number[], chunckSize: number){
  const result: number[][] = []

  for (let i = 0; i < nums.length; i += chunckSize) {
    result.push(nums.slice(i, i + chunckSize))
  }

  return result
}
