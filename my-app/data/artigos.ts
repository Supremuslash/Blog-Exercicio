import slugify from "slugify";
import artigosJson from "./artigos.json";

export type Artigo = (typeof artigosJson)[number] & { slug: string };

export const artigos: Artigo[] = artigosJson.map((artigo) => ({
  ...artigo,
  slug: slugify(artigo.titulo, { lower: true, strict: true }),
}));

export function getArtigoBySlug(slug: string) {
  return artigos.find((artigo) => artigo.slug === slug);
}