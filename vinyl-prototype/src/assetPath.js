export function assetPath(fileName) {
  const currentAssetBase = `${import.meta.env.BASE_URL}assets/`;
  if (fileName.startsWith(currentAssetBase)) return fileName;
  const normalized = fileName.replace(/^\/?assets\//, "");
  return `${currentAssetBase}${normalized}`;
}
