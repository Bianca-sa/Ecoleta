import { Button } from '../index';
import { Link } from 'react-router-dom';
import Check from '../../assets/images/check.svg';

import styles from './styles.module.scss';

const Modal = ({ isLoadingModal }) => {
  const { backgroundModal, modal, loadingModal } = styles;
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className={backgroundModal}>
      {isLoadingModal ? (
        <div className={loadingModal}>
          <img src={Check} />
          <h2>Cadastro concluído!</h2>
        </div>
      ) : (
        <div className={modal}>
          <h2>Pontos de coleta</h2>
          <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Digite a cidade' />
            <input type='text' placeholder='Digite o estado' />
          </form>
          <Link to='/list'>
            <Button label='Buscar' />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Modal;
