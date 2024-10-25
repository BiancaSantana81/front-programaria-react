import styles from '../styles/footer.module.css'

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.footerText}>
               Back-end desenvolvido por Bianca Santana ♡
        <br />
        Feito com ♡ por Simara Conceição para PrograMaria.
      </p>
    </div>
  )
}
