// Updated prisma/seed.ts
import prisma from "@/lib/prisma";
import { PrismaClient, Prisma } from "../app/generated/prisma";
import { pokemonNamesGen1ToGen6 } from "../data/pokemondata";
import { countriesAtoZ } from "../data/countriesdata";

const wordCategories: Prisma.WordCategoryCreateInput[] = [
  {
    name: "pokemon",
    description: "Pokemon names from generations 1-6",
    words: pokemonNamesGen1ToGen6.map((name) => name.toLowerCase()),
    isActive: true,
  },
  {
    name: "countries",
    description: "Countries of the world A-Z",
    words: countriesAtoZ.map((name) => name.toLowerCase()),
    isActive: true,
  },
];

export async function main() {
  try {
    for (const categoryData of wordCategories) {
      const category = await prisma.wordCategory.upsert({
        where: { name: categoryData.name },
        update: {
          words: categoryData.words,
          description: categoryData.description,
          isActive: categoryData.isActive,
        },
        create: categoryData,
      });
    }
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
