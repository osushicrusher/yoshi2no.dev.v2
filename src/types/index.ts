/**
 * 日時
 */
export type DateType = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

/**
 * カテゴリー
 */
export type Category = {
  id: string;
  name: CategoryName;
} & DateType;
export type CategoryName = "Tech" | "Language Learning";

/**
 * タグ
 */
export type Tag = {
  id: string;
  name: TagName;
} & DateType;
export type TagName = "Algorithm" | "Frontend";
export type Tags = Tag[];

/**
 * ブログ
 */
export type Blog = {
  id: string;
  title: string;
  content: string;
  tags: Tags;
} & DateType;
export type Blogs = Blog[];
