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
    examples: z.array(z.string()),
    annualVolume: z.string(),
    lifespan: z.string(),
    group: z.enum(["everyday", "longer-cycle"]),
  }),
});

export const collections = { principles, products };
