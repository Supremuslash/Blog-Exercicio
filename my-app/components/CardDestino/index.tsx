import Link from "next/link";
import Image from "next/image";
import type { Destino } from "../../data/destinos";
import styles from "./CardDestino.module.css";

type CardDestinoProps = {
  destino: Destino;
};

export default function CardDestino({ destino }: CardDestinoProps) {
  return (
    <article className={styles.card}>
      <Link href={`/destinos/${destino.id}`} className={styles.cardLink}>
        <div className={styles.imageStack}>
          <Image
            src={destino.imagem}
            alt={destino.nome}
            className={styles.image}
            fill
            sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw"
          />
          {destino.imagemSecundaria ? (
            <Image
              src={destino.imagemSecundaria}
              alt={`${destino.nome} - vista adicional`}
              className={styles.secondaryImage}
              fill
              sizes="(max-width: 560px) 28vw, (max-width: 900px) 14vw, 7vw"
            />
          ) : null}
        </div>
        <div className={styles.cardBody}>
          <span className={styles.local}>{destino.local}</span>
          <h2 className={styles.cardTitle}>{destino.nome}</h2>
          <p className={styles.cardSubtitle}>{destino.destaque}</p>
        </div>
      </Link>
    </article>
  );
}