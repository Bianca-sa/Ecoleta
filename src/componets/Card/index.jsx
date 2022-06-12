import React from 'react';
import styles from './styles.module.scss';

const Card = ({
  props,
  image,
  name,
  selectedCardLabel,
  city,
  state,
  address,
  number,
}) => {
  const { card, textCard } = styles;

  return (
    <div className={card} {...props}>
      <img src={image} />
      <div className={textCard}>
        <h3>{name}</h3>

        <p>{selectedCardLabel}</p>
        <span>
          {city}, {state}
          <br /> {address}
          <br /> {number}
        </span>
      </div>
    </div>
  );
};

export default Card;
