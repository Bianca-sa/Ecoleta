import { Wrapper, Header, Card } from '../../componets/index';
import './list.scss';

const List = () => {
  return (
    <Wrapper backgroundList>
      <Header checkLink checkImg />
      <span className='card-count'>
        <b>2 pontos</b> encontrados
      </span>
      <div className='cards'>
        <Card tilte='Recycle Plastic' subTitle='Ponto de coleta' />
        <Card tilte='Papper for Nature' />
      </div>
    </Wrapper>
  );
};

export default List;
