import Link from 'next/link'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>❦</div>
        <span>Chung Đôi</span>
      </div>
      <nav className={styles.headerActions}>
        <Link href="#" className={styles.btnLink}>Mẫu Thiệp</Link>
        <Link href="#" className={styles.btnLink}>Bắt Đầu</Link>
      </nav>
    </header>
  )
}
