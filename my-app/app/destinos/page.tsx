import { destinos } from "../../data/destinos";
import CardDestino from "../../components/CardDestino";
import styles from "./page.module.css";
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function DestinosPage() {
  return (
    <section className={styles.destinosPage}>
      <header className={styles.pageHeader}>
        <h1>Destinos turísticos</h1>
        <p>
          Confira nossos destinos selecionados e clique em cada cartão para ver
          detalhes completos.
        </p>
      </header>
      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino key={destino.id} destino={destino} />
        ))}
      </div>
      <SpeedInsights />
    </section>
  );
}
