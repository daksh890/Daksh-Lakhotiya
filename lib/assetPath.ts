/**
 * Prepends the base path to a public asset path.
 * Empty in development, '/Daksh-Lakhotiya' in production (GitHub Pages).
 */
export const assetPath = (path: string): string =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
