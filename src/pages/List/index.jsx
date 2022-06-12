import { Wrapper, Header, Card } from '../../componets/index';
import styles from './styles.module.scss';
import React, { useContext } from 'react';
import Context from '../../context';

const List = () => {
  const { cardCount, cards, containerList } = styles;
  const { filterCity, filterState } = useContext(Context);

  const dbStorage = sessionStorage.getItem('dbStorage');
  const db = JSON.parse(dbStorage);

  return (
    <Wrapper backgroundList>
      <Header checkLink checkImg />
      <div className={containerList}>
        <span className={cardCount}>
          {db.length} {db.length > 1 ? 'itens' : 'item'}
        </span>
        <div className={cards}>
          {db
            ?.filter(
              (entity) =>
                entity.state[0] == filterState[0] && entity.city == filterCity
            )
            .map((obj, index) => (
              <Card
                key={index}
                image={obj.image}
                name={obj.name}
                selectedCardLabel={obj.selectedCardLabel.join(', ')}
                city={obj.city}
                state={obj.state}
                address={obj.address}
                number={obj.number}
              />
            ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default List;
