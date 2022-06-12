import styles from './styles.module.scss';
import React, { useEffect, useContext } from 'react';
import Context from '../../context';

const Form = () => {
  const { form } = styles;

  const {
    setName,
    setAddress,
    setNumber,
    setCity,
    city,
    state,
    setState,
    setImage,
    setStateApiIbge,
    stateApiIbge,
    cityApiIbge,
    setCityApiIbge,
    filterState,
    setFilterState,
    filterCity,
    setFilterCity,
  } = useContext(Context);

  return (
    <div className={form}>
      <label>
        <span>Nome da entidade</span>
        <input
          type='text'
          onChange={(event) => setName(event.target.value.toLowerCase())}
          required='required'
        />
      </label>
      <label>
        <span>Endereço</span>
        <input
          type='text'
          onChange={(event) => setAddress(event.target.value.toLowerCase())}
          required
        />
      </label>
      <label>
        <span>Número</span>
        <input
          type='number'
          onChange={(event) => setNumber(event.target.value)}
          required
        />
      </label>
      <label>
        <span>Estado</span>
        <select
          value={state ? state : 'select'}
          onChange={(event) => setState(event.target.value.split(','))}
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
        <span>Cidade</span>
        <select
          value={city ? city : 'select'}
          onChange={(event) => setCity(event.target.value)}
        >
          <option value='select' disabled>
            Selecione uma cidade
          </option>
          {cityApiIbge?.map((obj, index) => (
            <option key={index} value={obj.nome}>{`${obj.nome}`}</option>
          ))}
        </select>
      </label>
      <label>
        <span>Imagem</span>
        <input
          type='url'
          placeholder='URL da imagem do estabelecimento'
          onChange={(event) => setImage(event.target.value)}
          required
        />
      </label>
    </div>
  );
};

export default Form;
