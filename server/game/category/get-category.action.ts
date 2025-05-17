"use server";

import prisma from "@/lib/prisma";

const getCategory = async (category: string) => {
  const foundCategory = await prisma.wordCategory.findUnique({
    where: {
      name: category,
    },
  });

  if (!foundCategory) {
    return { success: false, error: "Category not found" };
  }

  return { success: true, category: foundCategory };
};

export default getCategory;
