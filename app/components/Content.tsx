'use client'

import { useEffect, useRef } from 'react'
import styles from './Content.module.css'

interface ContentProps {
  isOpen: boolean
}

export default function Content({ isOpen }: ContentProps) {
  const sectionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const revealOnScroll = () => {
      const reveals = sectionsRef.current?.querySelectorAll(`.${styles.reveal}`)
      if (!reveals) return

      reveals.forEach((element) => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        const revealPoint = 150

        if (elementTop < windowHeight - revealPoint) {
          element.classList.add(styles.active)
        }
      })
    }

    // Initial check
    setTimeout(revealOnScroll, 100)

    // Add scroll listener
    window.addEventListener('scroll', revealOnScroll)

    return () => {
      window.removeEventListener('scroll', revealOnScroll)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div ref={sectionsRef} className={styles.content}>
      <section className={`${styles.section} ${styles.reveal}`}>
        <h2 className={styles.sectionTitle}>Lời Ngỏ</h2>
        <div className={styles.sectionContent}>
          <p>Trân trọng kính mời</p>
          <p style={{ marginTop: '1rem' }}>
            Sự hiện diện của quý khách là niềm vinh hạnh cho gia đình chúng tôi.<br />
            Rất mong được đón tiếp!
          </p>
        </div>
      </section>

      <section className={`${styles.section} ${styles.reveal}`}>
        <h2 className={styles.sectionTitle}>Thông Tin Tiệc Cưới</h2>
        <div className={styles.eventDetails}>
          <div className={styles.eventItem}>
            <div className={styles.eventLabel}>Thời gian</div>
            <div className={styles.eventValue}>17:00 - Thứ Sáu, 7 tháng 2, 2026</div>
          </div>
          <div className={styles.eventItem}>
            <div className={styles.eventLabel}>Địa điểm</div>
            <div className={styles.eventValue}>
              Trung Tâm Tiệc Cưới Thanh Diệp<br />
              123 Đường Lê Lợi, Quận 1, TP.HCM
            </div>
          </div>
          <div className={styles.eventItem}>
            <div className={styles.eventLabel}>Liên hệ</div>
            <div className={styles.eventValue}>
              Chú rể: 0123 456 789<br />
              Cô dâu: 0987 654 321
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.reveal}`}>
        <h2 className={styles.sectionTitle}>Hình Ảnh</h2>
        <div className={styles.sectionContent}>
          <p style={{ opacity: 0.7 }}>
            Chúng tôi rất vui được chia sẻ những khoảnh khắc đẹp nhất cùng quý khách
          </p>
        </div>
      </section>

      <div className={styles.footer}>
        <div className={styles.footerDivider}></div>
        <p>Trân trọng cảm ơn</p>
        <p style={{ 
          marginTop: '0.5rem', 
          fontFamily: 'var(--font-cormorant)', 
          fontSize: '1.2rem' 
        }}>
          Toàn & Diệp
        </p>
        <p style={{ 
          marginTop: '1.5rem', 
          opacity: 0.6, 
          fontSize: '0.85rem' 
        }}>
          Được tạo bởi Chung Đôi
        </p>
      </div>
    </div>
  )
}
