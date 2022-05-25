import Button from '../Button';
import { Link } from 'react-router-dom';

import './modal.scss';

const Modal = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className='background-modal'>
      <div className='modal'>
        <h2>Pontos de coleta</h2>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='Digite a cidade' />
          <input type='text' placeholder='Digite o estado' />
        </form>
        <Link to='/list'>
          <Button />
        </Link>
      </div>
    </div>
  );
};

export default Modal;
