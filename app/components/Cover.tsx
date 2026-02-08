import styles from './Cover.module.css'

interface CoverProps {
  isOpen: boolean
  onOpen: () => void
}

export default function Cover({ isOpen, onOpen }: CoverProps) {
  return (
    <section 
      className={`${styles.cover} ${isOpen ? styles.hidden : ''}`}
    >
      {/* Decorative leaves */}
      <div className={`${styles.leafDecoration} ${styles.leafTopLeft}`}>🌿</div>
      <div className={`${styles.leafDecoration} ${styles.leafTopRight}`}>🍃</div>
      <div className={`${styles.leafDecoration} ${styles.leafBottomLeft}`}>🌿</div>
      <div className={`${styles.leafDecoration} ${styles.leafBottomRight}`}>🍃</div>

      <div className={styles.divider}></div>
      
      <h1 className={styles.coupleNames}>Toàn & Diệp</h1>
      
      <div className={styles.ornament}>❦</div>
      
      <p className={styles.date}>7 tháng 2, 2026</p>
      
      <p className={styles.invitationText}>Thân Mời</p>
      
      <button className={styles.openButton} onClick={onOpen}>
        Mở thiệp
      </button>
    </section>
  )
}
