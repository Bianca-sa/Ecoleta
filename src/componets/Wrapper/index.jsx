import styles from './styles.module.scss';
import principal from '../../assets/images/principal.svg';

const Wrapper = ({ children, hasImage, backgroundList }) => {
  const { wrapper, content, image } = styles;

  return (
    <div
      className={wrapper}
      style={
        backgroundList && {
          background: 'linear-gradient( to bottom, #e5e5e5 312px , #FFFFFF 0)',
        }
      }
    >
      <div className={content}>{children}</div>
      {hasImage && (
        <img
          className={image}
          src={principal}
          alt='Dezenho de uma mulher negra levando uma garrafa para reciclar e um homem branco levando papeis para reciclar.'
        />
      )}
    </div>
  );
};

export default Wrapper;
