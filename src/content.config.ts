import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    postDate: z.coerce.date(),
  }),
});

export const collections = {
  blog: blogCollection,
};
