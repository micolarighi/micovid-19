import React from 'react'
import styles from './Footer.module.css'
import FavoriteIcon from '@mui/icons-material/Favorite';

function Footer() {
  return (
    <div>
      <p className={styles.footerDiv}>
        Made with
        <FavoriteIcon className={styles.icon} />
        by Micola Arighi Dwitya
      </p>
    </div>
  )
}

export default Footer