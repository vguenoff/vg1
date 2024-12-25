import { PropsWithChildren } from 'react'

import styles from './Frame.module.css'

type Props = PropsWithChildren<{ date: string }>

export default function Frame({ date, children }: Props) {
  return (
    <div className={styles.main}>
      <p className={styles.date}>{date}</p>
      {children}
    </div>
  )
}
