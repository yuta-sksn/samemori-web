import { Category } from "./category"

export type Content = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
  category: Category
  description: string
}