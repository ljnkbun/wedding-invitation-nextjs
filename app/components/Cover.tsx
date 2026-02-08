'use client'

import { useState, useCallback, useRef } from 'react'
import styles from './Cover.module.css'

interface CoverProps {
  isOpen: boolean
  onOpen: () => void
}

const FIREWORK_HEARTS = 16
const FIREWORK_DURATION = 1400
const FIREWORK_MAX_DIST = 400

function randomInRange(min: number, max: number) {
  return min + Math.random() * (max - min)
}

const HEARTS = [
  { left: 8, duration: 14, delay: 0, size: 0.9 },
  { left: 15, duration: 16, delay: 1.2, size: 0.7 },
  { left: 22, duration: 13, delay: 0.5, size: 1 },
  { left: 35, duration: 17, delay: 2, size: 0.8 },
  { left: 42, duration: 15, delay: 0.8, size: 0.85 },
  { left: 55, duration: 18, delay: 1.5, size: 0.75 },
  { left: 62, duration: 14, delay: 0.2, size: 1 },
  { left: 72, duration: 16, delay: 2.2, size: 0.7 },
  { left: 78, duration: 13, delay: 1, size: 0.9 },
  { left: 88, duration: 17, delay: 0.6, size: 0.8 },
  { left: 28, duration: 15, delay: 1.8, size: 0.65 },
  { left: 48, duration: 14, delay: 2.5, size: 0.95 },
  { left: 68, duration: 16, delay: 0.3, size: 0.7 },
]

export default function Cover({ isOpen, onOpen }: CoverProps) {
  const [showFirework, setShowFirework] = useState(false)
  const [fireworkOrigin, setFireworkOrigin] = useState({ x: 0, y: 0 })
  const [fireworkHearts, setFireworkHearts] = useState<Array<{ tx: number; ty: number }>>([])
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleOpen = useCallback(() => {
    const btn = buttonRef.current
    if (btn) {
      const rect = btn.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      const y = rect.top + rect.height / 2
      setFireworkOrigin({ x, y })
      setFireworkHearts(
        Array.from({ length: FIREWORK_HEARTS }, () => ({
          tx: randomInRange(-FIREWORK_MAX_DIST, FIREWORK_MAX_DIST),
          ty: randomInRange(-FIREWORK_MAX_DIST, FIREWORK_MAX_DIST),
        }))
      )
    }
    setShowFirework(true)
    setTimeout(() => {
      onOpen()
      setShowFirework(false)
    }, FIREWORK_DURATION)
  }, [onOpen])

  return (
    <section 
      className={`${styles.cover} ${isOpen ? styles.hidden : ''}`}
    >
      {/* Firework hearts from button to random places */}
      {showFirework && (
        <div
          className={styles.fireworkOverlay}
          style={{
            left: fireworkOrigin.x,
            top: fireworkOrigin.y,
          }}
          aria-hidden
        >
          {fireworkHearts.map((h, i) => (
            <span
              key={i}
              className={styles.fireworkHeart}
              style={{
                ['--tx' as string]: `${h.tx}px`,
                ['--ty' as string]: `${h.ty}px`,
              }}
            >
              ❤
            </span>
          ))}
        </div>
      )}
      {/* Falling hearts */}
      <div className={styles.heartsLayer} aria-hidden>
        {HEARTS.map((h, i) => (
          <span
            key={i}
            className={styles.heart}
            style={{
              left: `${h.left}%`,
              animationDuration: `${h.duration}s`,
              animationDelay: `-${h.delay}s`,
              fontSize: `${10 + h.size * 8}px`,
            }}
          >
            ❤
          </span>
        ))}
      </div>
      {/* Decorative leaves */}
      <div className={`${styles.leafDecoration} ${styles.leafTopLeft}`}>🌿</div>
      <div className={`${styles.leafDecoration} ${styles.leafTopRight}`}>🍃</div>
      <div className={`${styles.leafDecoration} ${styles.leafBottomLeft}`}>🌿</div>
      <div className={`${styles.leafDecoration} ${styles.leafBottomRight}`}>🍃</div>

      {/* Envelope card */}
      <div className={styles.envelopeCard}>
        <div className={styles.envelopeFlap}>
          <svg viewBox="0 0 380 100" preserveAspectRatio="none" className={styles.envelopeFlapSvg}>
            <defs>
              <linearGradient id="flapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1a2b15" />
                <stop offset="100%" stopColor="rgb(6, 23, 1)" />
              </linearGradient>
            </defs>
            <path d="M 16 0 L 364 0 Q 380 0 380 16 L 380 20 L 190 100 L 0 20 L 0 16 Q 0 0 16 0 Z" fill="url(#flapGradient)" />
          </svg>
        </div>
        <div className={styles.seal}>
          <svg viewBox="0 0 24 24" className={styles.sealHeartSvg} fill="currentColor">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
        <div className={styles.cardInner}>
          <h1 className={styles.cardTitle}>Hưng & Linh</h1>
          <div className={styles.cardLineGroup}>
            <div className={styles.cardLine} />
            <span className={styles.cardOrnament}>❦</span>
            <div className={styles.cardLineRight} />
          </div>
          <p className={styles.cardDate}>7 tháng 2, 2026</p>
          <div className={styles.cardInvitationWrap}>
            <p className={styles.cardInvitationText}>Thân Mời</p>
          </div>
          <button ref={buttonRef} type="button" className={styles.cardButton} onClick={handleOpen}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className={styles.cardButtonIcon}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
            </svg>
            Mở thiệp
            <span className={styles.cardButtonShine} />
          </button>
          <div className={styles.cardDots}>
            <span className={styles.cardDot} />
            <span className={styles.cardDot} />
            <span className={styles.cardDot} />
          </div>
        </div>
      </div>
    </section>
  )
}
