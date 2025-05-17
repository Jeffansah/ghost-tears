"use server";

import prisma from "@/lib/prisma";

const getCategories = async () => {
  try {
    const categories = await prisma.wordCategory.findMany();
    return { success: true, categories };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to get categories" };
  }
};

export default getCategories;
