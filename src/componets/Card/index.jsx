import React from 'react';
import styles from './styles.module.scss';

const Card = ({ nameProps }) => {
  const { card, textCard } = styles;

  const dbStorage = sessionStorage.getItem('dbStorage');
  const db = JSON.parse(dbStorage);

  return db.map((obj) => (
    <div className={card}>
      <img src={obj.image} />
      <div className={textCard}>
        <h3>{obj.name}</h3>
        <p>{obj.selectedCardLabel}</p>
        <span>
          {obj.city}, {obj.state}
          <br /> {obj.address}
          <br /> {obj.number}
        </span>
      </div>
    </div>
  ));
};

export default Card;
