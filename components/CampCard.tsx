import React from 'react';
import Image from 'next/image';
import styles from './CampCard.module.css';

interface CampCardProps {
  title: string;
  description: string;
  link: string;
  coverImage: string;
}

const CampCard: React.FC<CampCardProps> = ({ title, description, link, coverImage }) => {
  return (
    <div className={styles.cardContainer}>
      <a href={link} className={styles.card}>
        <div className={styles.wrapper}>
          <Image
            src={coverImage}
            alt={title}
            fill
            className={styles.coverImage}
            priority
          />
        </div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.characterContainer}>
          <Image
            src="/images/Card Elements/SummerCamp.png"
            alt="Summer Camp Character"
            fill
            className={styles.character}
            priority
          />
        </div>
      </a>
    </div>
  );
};

export default CampCard; 