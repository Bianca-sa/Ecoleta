import styles from './styles.module.scss';

const Card = ({ imgCard, nameEntity, nameProps, address }) => {
  const { card, textCard } = styles;

  return (
    <div className={card}>
      <img src={imgCard} />
      <div className={textCard}>
        <h3>{nameEntity}</h3>
        <p>{nameProps}</p>
        <span>{address}</span>
      </div>
    </div>
  );
};

export default Card;
