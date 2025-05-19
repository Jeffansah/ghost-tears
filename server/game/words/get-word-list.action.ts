"use server";

import prisma from "@/lib/prisma";

const getWordList = async ({ category }: { category: string }) => {
  try {
    const wordList = await prisma.wordCategory.findUnique({
      where: {
        name: category,
      },
    });
    return {
      success: true,
      wordList,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: "Failed to get word list",
    };
  }
};

export default getWordList;
