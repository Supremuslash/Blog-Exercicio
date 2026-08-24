import Link from "next/link";
import CardArtigo from "../components/CardArtigo";
import CardDestino from "../components/CardDestino";
import { artigos } from "../data/artigos";
import { destinos } from "../data/destinos";
import styles from "./page.module.css";

export const dynamic = "force-static";

export default function Home() {
  return (
    <section className={styles.home}>
      <header className={styles.hero}>
        <p className={styles.kicker}>Caderno de Viagens / edição 01</p>
        <div className={styles.heroGrid}>
          <h1>Viajar é prestar atenção.</h1>
          <div className={styles.heroIntro}>
            <p>Um arquivo de lugares, gestos e histórias para quem prefere descobrir o mundo sem pressa.</p>
            <a href="#artigos" className={styles.heroLink}>Explorar o caderno <span aria-hidden="true">↘</span></a>
          </div>
        </div>
      </header>
      <section className={styles.featured} aria-labelledby="destinos-title">
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>01 / lugares</p>
          <h2 id="destinos-title">Para onde olhar agora</h2>
            <Link href="/destinos" className={styles.sectionLink}>Ver todos <span aria-hidden="true">↗</span></Link>
        </div>
        <div className={styles.destinationGrid}>
          {destinos.slice(0, 3).map((destino) => <CardDestino key={destino.id} destino={destino} />)}
        </div>
      </section>
      <section className={styles.articles} id="artigos" aria-labelledby="artigos-title">
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>02 / leituras</p>
          <h2 id="artigos-title">Notas de campo</h2>
        </div>
        <div className={styles.articleGrid}>
          {artigos.map((artigo, index) => <CardArtigo key={artigo.slug} artigo={artigo} index={index + 1} />)}
        </div>
      </section>
      <footer className={styles.homeFooter}>
        <p>Uma coleção em movimento.</p>
        <span>Brasil, 2026</span>
      </footer>
    </section>
  );
}
