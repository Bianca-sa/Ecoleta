import { Button } from '../index';
import { Link } from 'react-router-dom';
import Check from '../../assets/images/check.svg';
import Close from '../../assets/images/close.png';
import React, { useContext } from 'react';
import Context from '../../context';

import styles from './styles.module.scss';

const Modal = ({ isLoadingModal, closeModal }) => {
  const { backgroundModal, modal, loadingModal } = styles;
  const {
    stateApiIbge,
    setFilterState,
    filterState,
    filterCity,
    setFilterCity,
    cityApiIbge,
  } = useContext(Context);

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
          <img src={Close} onClick={closeModal} />
          <h2>Pontos de coleta</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <select
                value={filterState ? filterState : 'select'}
                onChange={(event) =>
                  setFilterState(event.target.value.split(','))
                }
              >
                <option value='select' disabled>
                  Selecione um estado
                </option>
                {stateApiIbge?.map((obj, index) => (
                  <option
                    key={index}
                    value={`${obj.nome},${obj.sigla}`}
                  >{`${obj.nome} (${obj.sigla})`}</option>
                ))}
              </select>
            </label>
            <label>
              <select
                value={filterCity ? filterCity : 'select'}
                onChange={(event) => setFilterCity(event.target.value)}
              >
                <option value='select' disabled>
                  Selecione uma cidade
                </option>
                {cityApiIbge?.map((obj, index) => (
                  <option key={index} value={obj.nome}>{`${obj.nome}`}</option>
                ))}
              </select>
            </label>
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
