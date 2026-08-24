import { notFound } from "next/navigation";
import { destinos } from "../../../data/destinos";
import type { Destino } from "../../../data/destinos";
import styles from "./page.module.css";
import Image from 'next/image'

type Params = {
  params: Promise<{ id: string }>;
};

function findDestino(id: string): Destino | undefined {
  return destinos.find((destino) => destino.id === id);
}

export default async function DestinoPage({ params }: Params) {
  const { id } = await params;
  const destino = findDestino(id);

  if (!destino) {
    notFound();
  }

  return (
    <section className={styles.detailPage}>
      <div className={styles.imageWrapper}>
        <Image
          src={destino.imagem}
          alt={destino.nome}
          className={styles.image}
          fill
          sizes="(max-width: 760px) 100vw, 60vw"
        />
      </div>
      <div className={styles.detailContent}>
        <span className={styles.local}>{destino.local}</span>
        <h1>{destino.nome}</h1>
        <p className={styles.destaque}>{destino.destaque}</p>
        <p className={styles.description}>{destino.descricao}</p>
      </div>
    </section>
  );
}
