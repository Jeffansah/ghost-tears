import { query } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    const rows = await ctx.db
      .query("wordCategories")
      .withIndex("by_isActive", (q) => q.eq("isActive", true))
      .collect();
    return rows
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((c) => ({
        id: c._id,
        name: c.name,
      }));
  },
});

export const getByName = query({
  args: { name: v.string() },
  handler: async (ctx, { name }) => {
    const doc = await ctx.db
      .query("wordCategories")
      .withIndex("by_name", (q) => q.eq("name", name))
      .unique();
    if (!doc || !doc.isActive) {
      return null;
    }
    return {
      id: doc._id,
      name: doc.name,
      description: doc.description ?? null,
      words: doc.words,
      isActive: doc.isActive,
      createdAt: doc._creationTime,
      updatedAt: doc.updatedAt ?? doc._creationTime,
    };
  },
});
