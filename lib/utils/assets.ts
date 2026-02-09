// Always use /website as basePath to match next.config.mjs
const basePath = '/website'

export function getAssetPath(path: string): string {
  return `${basePath}${path}`
}
