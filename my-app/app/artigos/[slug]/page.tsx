import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { artigos, getArtigoBySlug } from "../../../data/artigos";
import styles from "./page.module.css";

export const dynamic = "force-static";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return artigos.map((artigo) => ({ slug: artigo.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const artigo = getArtigoBySlug(slug);
  return artigo
    ? { title: artigo.titulo, description: artigo.descricao }
    : { title: "Artigo não encontrado" };
}

export default async function ArtigoPage({ params }: Params) {
  const { slug } = await params;
  const artigo = getArtigoBySlug(slug);
  if (!artigo) notFound();

  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <span className={styles.eyebrow}>Diário de viagem</span>
        <h1>{artigo.titulo}</h1>
        <p className={styles.description}>{artigo.descricao}</p>
        <div className={styles.meta}>
          <span>Por {artigo.autor}</span>
          <time dateTime={artigo.dataPublicacao}>
            {new Intl.DateTimeFormat("pt-BR", { dateStyle: "long" }).format(new Date(`${artigo.dataPublicacao}T12:00:00`))}
          </time>
        </div>
      </header>
      <div className={styles.content}>
        {artigo.conteudo.map((paragrafo) => <p key={paragrafo}>{paragrafo}</p>)}
      </div>
    </article>
  );
}