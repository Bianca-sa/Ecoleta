import styles from './styles.module.scss';

const Form = () => {
  const { form } = styles;

  return (
    <div className={form}>
      <label>
        <span>Nome da entidade</span>
        <input type='text' required='required' />
      </label>
      <label>
        <span>Endereço</span>
        <input type='text' required />
      </label>
      <label>
        <span>Número</span>
        <input type='number' required />
      </label>
      <label>
        <span>Cidade</span>
        <input type='text' required />
      </label>
      <label>
        <span>Estado</span>
        <input type='text' required />
      </label>
      <label>
        <span>Imagem</span>
        <input
          type='text'
          placeholder='URL da imagem do estabelecimento'
          required
        />
      </label>
    </div>
  );
};

export default Form;
