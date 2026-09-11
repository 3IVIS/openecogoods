import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const principles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/principles" }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    summary: z.string(),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/products" }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    impact: z.number().min(1).max(5),
    feasibility: z.number().min(1).max(5),
    summary: z.string(),
  }),
});

export const collections = { principles, products };
