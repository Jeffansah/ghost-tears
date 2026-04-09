/** Convex Auth / Password provider errors are plain strings; map them for UX. */
export function formatAuthErrorMessage(err: unknown): string {
  const raw = extractErrorText(err);
  if (!raw) {
    return "Something went wrong. Please try again.";
  }

  const msg = raw.trim();
  const lower = msg.toLowerCase();

  if (
    msg.includes("InvalidAccountId") ||
    lower.includes("invalidaccountid")
  ) {
    return "Use a valid email address—the same one you used to sign up.";
  }

  if (
    lower.includes("invalid credentials") ||
    lower.includes("invalid_credentials")
  ) {
    return "Incorrect email or password.";
  }

  if (lower.includes("email is required")) {
    return "Enter your email address.";
  }

  if (lower.includes("invalid email format")) {
    return "Enter a valid email address.";
  }

  if (lower.includes("missing `password`") || lower.includes("missing `email`")) {
    return "Fill in all fields and try again.";
  }

  if (lower.includes("invalid password")) {
    return "Password must be at least 8 characters.";
  }

  return msg;
}

function extractErrorText(err: unknown): string {
  if (err instanceof Error) {
    return err.message;
  }
  if (typeof err === "string") {
    return err;
  }
  if (typeof err === "object" && err !== null && "message" in err) {
    const m = (err as { message: unknown }).message;
    if (typeof m === "string") {
      return m;
    }
  }
  try {
    return JSON.stringify(err);
  } catch {
    return "";
  }
}

export function normalizeAuthEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function isValidEmailFormat(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
