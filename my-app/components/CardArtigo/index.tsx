import Link from "next/link";
import type { Artigo } from "../../data/artigos";
import styles from "./CardArtigo.module.css";

type CardArtigoProps = { artigo: Artigo; index: number };

export default function CardArtigo({ artigo, index }: CardArtigoProps) {
  return (
    <article className={styles.card}>
      <Link href={`/artigos/${artigo.slug}`} className={styles.cardLink}>
        <span className={styles.number}>{String(index).padStart(2, "0")}</span>
        <span className={styles.eyebrow}>Diário de viagem / {artigo.autor}</span>
        <h2>{artigo.titulo}</h2>
        <p>{artigo.descricao}</p>
        <span className={styles.readMore}>Ler artigo <span aria-hidden="true">→</span></span>
      </Link>
    </article>
  );
}