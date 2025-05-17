// app/server/actions/create-user.action.ts
"use server";

import prisma from "@/lib/prisma";

interface User {
  id: string;
  clerkId: string;
  username: string;
  wins: number;
  losses: number;
  createdAt: Date;
  updatedAt: Date;
}

type CreateUserResponse =
  | {
      success: boolean;
      user: User;
    }
  | {
      success: boolean;
      error: unknown;
    };

export async function createUser(
  clerkId: string,
  username: string | null
): Promise<CreateUserResponse> {
  try {
    // First check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { clerkId },
    });

    if (existingUser) {
      return { success: true, user: existingUser };
    }

    // If user doesn't exist, create new user
    const user = await prisma.user.create({
      data: {
        clerkId,
        username: username || `user_${clerkId.slice(0, 8)}`,
        wins: 0,
        losses: 0,
      },
    });
    return { success: true, user };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, error };
  }
}
