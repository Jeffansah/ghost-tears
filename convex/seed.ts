import { internalMutation } from "./_generated/server";
import { pokemonNamesGen1ToGen6 } from "../data/pokemondata";
import { countriesAtoZ } from "../data/countriesdata";

export const seedWordCategories = internalMutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("wordCategories").collect();
    if (existing.length > 0) {
      return { skipped: true as const, count: existing.length };
    }

    const now = Date.now();
    await ctx.db.insert("wordCategories", {
      name: "pokemon",
      description: "Pokemon names from generations 1-6",
      words: pokemonNamesGen1ToGen6.map((name) => name.toLowerCase()),
      isActive: true,
      updatedAt: now,
    });
    await ctx.db.insert("wordCategories", {
      name: "countries",
      description: "Countries of the world A-Z",
      words: countriesAtoZ.map((name) => name.toLowerCase()),
      isActive: true,
      updatedAt: now,
    });

    return { skipped: false as const, inserted: 2 };
  },
});
