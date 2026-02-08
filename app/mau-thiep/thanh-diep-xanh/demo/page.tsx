'use client'

import { useState } from 'react'
import Cover from '../../../components/Cover'
import Content from '../../../components/Content'
import styles from '../../../page.module.css'

export default function DemoPage() {
  const [isOpen, setIsOpen] = useState(false)

  const openInvitation = () => {
    setIsOpen(true)
  }

  return (
    <div className={styles.container}>
      <Cover isOpen={isOpen} onOpen={openInvitation} />
      <Content isOpen={isOpen} />
    </div>
  )
}
