import { Password } from "@convex-dev/auth/providers/Password";
import { convexAuth } from "@convex-dev/auth/server";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function displayNameFromParams(raw: string | undefined, email: string): string {
  const trimmed = raw?.trim();
  if (trimmed && trimmed.length > 0) {
    return trimmed.slice(0, 64);
  }
  const local = email.split("@")[0] ?? "player";
  return local.slice(0, 64) || "player";
}

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [
    Password({
      profile: (params) => {
        const email = String(params.email ?? "")
          .trim()
          .toLowerCase();
        if (!email) {
          throw new Error("Email is required");
        }
        if (!isValidEmail(email)) {
          throw new Error("Invalid email format");
        }
        const name = displayNameFromParams(
          params.username as string | undefined,
          email,
        );
        return {
          email,
          name,
          username: email,
          wins: 0,
          losses: 0,
        };
      },
    }),
  ],
});
