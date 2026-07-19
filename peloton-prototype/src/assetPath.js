export function assetPath(fileName) {
  const normalized = fileName.replace(/^\/?assets\//, "");
  return `${import.meta.env.BASE_URL}assets/${normalized}`;
}
