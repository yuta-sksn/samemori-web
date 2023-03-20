import { Content } from "./content"

export type News = {
  contents: Content[]
  totalCount: number
  offset: number
  limit: number
}

export type NewsResponse = {
  contents: Content[]
  totalCount: number
  offset: number
  limit: number
}