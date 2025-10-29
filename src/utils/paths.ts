export const BASE = import.meta.env.BASE_URL;
export const withBase = (path: string) => BASE + (path.startsWith('/') ? path.slice(1) : path);
