import { Wrapper, Header, Card } from '../../componets/index';
import styles from './styles.module.scss';

const List = () => {
  const { cardCount, cards, containerList } = styles;

  return (
    <Wrapper backgroundList>
      <Header checkLink checkImg />
      <div className={containerList}>
        <span className={cardCount}>
          <b>2 pontos</b> encontrados
        </span>
        <div className={cards}>
          <Card />
          <Card />
        </div>
      </div>
    </Wrapper>
  );
};

export default List;
