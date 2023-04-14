import React from 'react';
import BannerImage from '../../assets/banner.jpg';
import styles from './styles.module.scss';
const FirstSetion: React.FC = () => {
  return (
    <div className={styles.firstSection}>
      <img src={BannerImage} alt='banner'/>
    </div>
  )
}

export default FirstSetion;