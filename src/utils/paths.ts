export const BASE = import.meta.env.BASE_URL;
export const withBase = (path: string) => {
  // Supprime les doubles slash éventuels
  if (!path) return BASE;
  const cleaned = path.startsWith('/') ? path.slice(1) : path;
  return BASE.endsWith('/') ? BASE + cleaned : BASE + '/' + cleaned;
};
