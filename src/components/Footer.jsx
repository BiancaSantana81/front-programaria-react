import styles from '../styles/footer.module.css'

export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <p className={styles.footerText}>
        Front-end feito com ♡ por Simara Conceição para PrograMaria.
        <br />
        Back-end desenvolvido por Bianca Santana para projeto de curso. ♡
      </p>
    </div>
  )
}
