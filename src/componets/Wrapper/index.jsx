import styles from './styles.module.scss';
import principal from '../../assets/images/principal.svg';

const Wrapper = ({ children, hasImage, backgroundList }) => {
  const { wrapper, content, image } = styles;

  return (
    <div
      className={wrapper}
      style={
        backgroundList && {
          background: 'linear-gradient( to bottom, #e5e5e5 320px, #FFFFFF 0)',
        }
      }
    >
      <div className={content}>{children}</div>
      {hasImage && <img className={image} src={principal} />}
    </div>
  );
};

export default Wrapper;

// 1- Criar 5 cards com endereços reais
// 2- Na list mostrar os cards de acordo com o filtro do modal.
// salva os dados do modal no context'
// na list verifique se esta chegando no context os dados
// com base nos dados fazer a listagem
