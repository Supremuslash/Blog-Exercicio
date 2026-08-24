import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand}>Viajando</Link>
      <nav className={styles.navigation} aria-label="Navegação principal">
        <Link href="/">Início</Link>
        <Link href="/destinos">Destinos</Link>
        <Link href="/#artigos">Leituras</Link>
      </nav>
    </header>
  );
}
