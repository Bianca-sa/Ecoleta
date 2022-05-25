import './card.scss';

const Card = ({ imgCard, title, subTitle, text }) => {
  return (
    <div className='card'>
      <img className='img-container' src={imgCard} />
      <div className='text-card'>
        <h3>{title}</h3>
        <p>{subTitle}</p>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Card;
