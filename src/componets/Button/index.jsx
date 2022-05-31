import styles from './styles.module.scss';

const Button = ({ type, label, onClick }) => (
  <button type={type} className={styles.buttonStandart} onClick={onClick}>
    {label}
  </button>
);

export default Button;
