import { defineCollection, z } from "astro:content";


const blogCollection=defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        description:z.string(),
        postDate: z.coerce.date(),
    }),
})

export const collections = {
  'blog': blogCollection,
};