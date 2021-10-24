export function normalizePackageItem(item) {
  return {
    name: item.package.name,
    author: item.package.author?.name,
    description: item.package.description,
    version: item.package.version,
  }
}
