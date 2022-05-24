import Button from '../Button';

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
        <Button />
      </div>
    </div>
  );
};

export default Modal;
