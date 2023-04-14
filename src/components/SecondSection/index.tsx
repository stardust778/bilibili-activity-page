import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

import CartoonImage from '../../assets/cartoon.jpg';
import MovieImage from '../../assets/movie.png';
import FoodImage from '../../assets/food.jpg';
import LiftImage from '../../assets/life.jpg';
import LogoImage from '../../assets/logo.png';

const tabs = [
  { key: 'cartoon', title: '动画', image: CartoonImage },
  { key: 'food', title: '美食', image: FoodImage },
  { key: 'movie', title: '电影', image: MovieImage },
  { key: 'life', title: '生活', image: LiftImage },
]

const TAB_HEIGHT = 56;

const SecondSetion: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('cartoon');
  const [isFix, setIsFix] = useState<boolean>(false);
  const secondSectionRef = useRef<HTMLDivElement>(null);

  const activate = (key: string) => {
    setActiveTab(key);
    const tabContentEl = document.querySelector(`[data-id=${key}]`);

    if (tabContentEl) {
      tabContentEl.scrollIntoView({behavior: 'smooth'});
    }
  }

  const onScroll = () => {
    if (secondSectionRef.current) {
      const { top } = secondSectionRef.current.getBoundingClientRect();
      setIsFix(top <= 0);
      const sectionNodes = secondSectionRef.current.querySelectorAll('section');
      Array.from(sectionNodes).forEach(sectionEl => {
        const { top } = sectionEl.getBoundingClientRect();
        const key = sectionEl.getAttribute('data-id') || '';
        if (top <= TAB_HEIGHT) {
          setActiveTab(key);
        }
      })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }
  }, [])

  return (
    <div className={styles.secondSection} ref={secondSectionRef}>
      <ul className={classNames({ [styles.isFix]: isFix })}>
        {
          tabs.map(tab => {
            return (
              <li key={tab.key} onClick={() => activate(tab.key)}>
                <span>{tab.title}</span>
                 <span className={classNames(styles.line, {[styles.visible]: activeTab === tab.key})} />
              </li>
            )
          })
        }
      </ul>
      <div>
        {
          tabs.map(tab => (
            <section data-id={tab.key} key={tab.key}>
              <h2>{tab.title}</h2>
              <img src={tab.image} alt={tab.key} />
            </section>
          ))
        }
      </div>
      {/* 吸底按钮 */}
      <div className={classNames(styles.btnWrapper, { [styles.visible]: isFix })}>
        <img src={LogoImage} alt='logo' />
        <button>App 内打开</button>
      </div>
    </div>
  )
}

export default SecondSetion;