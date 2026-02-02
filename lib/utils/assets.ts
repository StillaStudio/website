const basePath = process.env.NODE_ENV === 'production' ? '/website' : ''

export function getAssetPath(path: string): string {
  return `${basePath}${path}`
}
