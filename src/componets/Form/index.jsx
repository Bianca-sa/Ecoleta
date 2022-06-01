import styles from './styles.module.scss';
import React, { useState, useContext } from 'react';
import Context from '../../context';

const Form = () => {
  const { form } = styles;

  const {
    setName,
    setAddress,
    setNumber,
    setCity,
    setState,
    setImage,
  } = useContext(Context);

  return (
    <div className={form}>
      <label>
        <span>Nome da entidade</span>
        <input
          type='text'
          onChange={(event) => setName(event.target.value)}
          required='required'
        />
      </label>
      <label>
        <span>Endereço</span>
        <input
          type='text'
          onChange={(event) => setAddress(event.target.value)}
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
        <span>Cidade</span>
        <input
          type='text'
          onChange={(event) => setCity(event.target.value)}
          required
        />
      </label>
      <label>
        <span>Estado</span>
        <input
          type='text'
          onChange={(event) => setState(event.target.value)}
          required
        />
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
