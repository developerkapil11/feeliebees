import postData from "@/content/posts.json";
import productData from "@/content/products.json";

export type Post = {
  slug: string;
  title: string;
  image: string;
  category: string;
  intro: string;
  sections: string[][];
  author: string;
  publishedAt: string;
  updatedAt: string;
  readingMinutes: number;
  published: boolean;
};

export const posts: Post[] = postData.filter(post => post.published).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
export const products = productData;
export type Product = (typeof products)[number];
