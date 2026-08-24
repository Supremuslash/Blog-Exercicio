import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>© {new Date().getFullYear()} Victor. Todos os direitos reservados.</div>
      </div>
    </footer>
  );
}
