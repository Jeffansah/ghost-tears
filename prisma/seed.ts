// prisma/seed.ts
import prisma from "@/lib/prisma";
import { PrismaClient, Prisma } from "../app/generated/prisma";
import { pokemonNamesGen1ToGen6 } from "../data/pokemondata";

const wordCategoryData: Prisma.WordCategoryCreateInput = {
  name: "pokemon",
  description: "Pokemon names from generations 1-6",
  words: pokemonNamesGen1ToGen6.map((name) => name.toLowerCase()), // Convert to lowercase for consistency
  isActive: true,
};

export async function main() {
  try {
    // Create the Pokemon category
    const pokemonCategory = await prisma.wordCategory.create({
      data: wordCategoryData,
    });

    console.log(
      "Created Pokemon category with",
      pokemonNamesGen1ToGen6.length,
      "words"
    );
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
