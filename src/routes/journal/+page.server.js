import { articles } from "../articles";

export function load() {
  return {
    feed : articles.map((article) => ({
      slug: article.slug,
      title: article.title,
      publishDate: article.publishDate
    }))
  }
}
