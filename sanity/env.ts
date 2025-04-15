// Hardcoded values from .env file
export const apiVersion = '2023-05-03'
export const dataset = 'sun'
export const projectId = 'ngkmh0ct'

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
