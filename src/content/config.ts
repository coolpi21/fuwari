import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    published: z.date(),
    updated: z.date().optional(),
    draft: z.boolean().optional().default(false),
    description: z.string().optional().default(""),
    image: z.string().optional().default(""),
    tags: z.array(z.string()).optional().default([]),
    category: z.string().optional().default(""),
    lang: z.string().optional().default(""),
    isTop: z.boolean().optional().default(false),
    /* For internal use */
    prevTitle: z.string().default(""),
    prevSlug: z.string().default(""),
    nextTitle: z.string().default(""),
    nextSlug: z.string().default(""),
  }),
});

// 添加 games 集合定义
const gamesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
  // 可以根据 games 的内容结构定义 schema
  // 从 p3r.md 文件来看，它可能使用 Markdown 内容，不需要特定的 frontmatter
  // type: "content", // 使用 content 类型表示这是 Markdown 内容
});

export const collections = {
  posts: postsCollection,
  games: gamesCollection,
};
