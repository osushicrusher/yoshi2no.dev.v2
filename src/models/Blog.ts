import { z } from "zod";
import type { ToZod } from "@/lib/zod";

/**
 * 定数
 */
const CONST = {
  categories: ["Tech", "Language Learning"],
  tags: ["Algorithm", "Frontend"],
} as const;

/**
 * 日時
 */
type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export const DataTypeSchema = z.object<ToZod<DateType>>({
  createdAt: z.string(), // TODO z.coerce.date() にすべきなのか確認
  updatedAt: z.string(),
  publishedAt: z.string(),
  revisedAt: z.string(),
});

/**
 * カテゴリー
 */
type CategoryName = (typeof CONST.categories)[number];
export const CategoryNameSchema = z.union([
  z.literal(CONST.categories[0]),
  z.literal(CONST.categories[1]),
]);
type Category = {
  id: string;
  name: CategoryName;
} & DateType;

/**
 * タグ
 */
type TagName = (typeof CONST.tags)[number];

export const TagNameSchema = z.union([
  z.literal(CONST.tags[0]),
  z.literal(CONST.tags[1]),
]);

type Tag = {
  id: string;
  name: TagName;
} & DateType;

export const TagSchema = z.object<ToZod<Tag>>({
  id: z.string(),
  name: TagNameSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
  publishedAt: z.string(),
  revisedAt: z.string(),
});

type Tags = Tag[];
export const TagsSchema = z.array(TagSchema);

/**
 * アイキャッチ
 */

// eyecatch: {
//   url: 'https://images.microcms-assets.io/assets/ffee5aa905b642dca6b761b2b98b6faa/d5bfa4fe9e964c53a6e58a0a83def9f6/blog-template.png',
//   height: 630,
//   width: 1200
// },

type Eyecatch = {
  url: string;
  height: number;
  width: number;
};

export const EyecatchSchema = z.object<ToZod<Eyecatch>>({
  url: z.string(),
  height: z.number(),
  width: z.number(),
});

/**
 * ブログ
 */
export type BaseBlog = {
  id: string;
  title: string;
  content: string;
  tags?: Tags;
  eyecatch?: Eyecatch;
};
export const BaseBlogSchema = z.object<ToZod<BaseBlog>>({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  tags: z.optional(TagsSchema),
  eyecatch: z.optional(EyecatchSchema),
});

export type Blog = BaseBlog & DateType;
export const BlogSchema = BaseBlogSchema.merge(DataTypeSchema);

export type Blogs = Blog[];
export const BlogsSchema = z.array(BlogSchema);

export type BlogsResponse = {
  contents: Blogs;
  totalCount: number;
  offset: number;
  limit: number;
};
export const BlogsResponseSchema = z.object<ToZod<BlogsResponse>>({
  contents: BlogsSchema,
  totalCount: z.number(),
  offset: z.number(),
  limit: z.number(),
});
