export const convexUrl =
  import.meta.env.VITE_CONVEX_URL ??
  import.meta.env.NEXT_PUBLIC_CONVEX_URL ??
  "";

export function getMissingEnv() {
  const missing: string[] = [];

  if (!convexUrl) {
    missing.push("VITE_CONVEX_URL or NEXT_PUBLIC_CONVEX_URL");
  }

  return missing;
}
