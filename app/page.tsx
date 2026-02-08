'use client'

import { useState, useEffect } from 'react'
import Header from './components/Header'
import Cover from './components/Cover'
import Content from './components/Content'
import styles from './page.module.css'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const openInvitation = () => {
    setIsOpen(true)
  }

  return (
    <div className={styles.container}>
      {/* <Header /> */}
      <Cover isOpen={isOpen} onOpen={openInvitation} />
      <Content isOpen={isOpen} />
    </div>
  )
}
