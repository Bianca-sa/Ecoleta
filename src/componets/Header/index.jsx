import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import login from '../../assets/images/login.svg';
import voltar from '../../assets/images/voltar.svg';

const Header = ({ checkLink, checkImg }) => {
  const { header, nav, link } = styles;

  return (
    <header className={header}>
      <img src={logo} alt='Logo da empresa Ecoleta' />
      <div className={nav}>
        {checkImg ? (
          <img
            src={voltar}
            alt='Imagem sinalizando retorno da página anterior'
          />
        ) : (
          <img src={login} alt='Imagem sinalizando entrada' />
        )}

        {checkLink ? (
          <Link className={link} to='/'>
            Voltar para home
          </Link>
        ) : (
          <Link className={link} to='/register'>
            Cadastre um ponto de coleta
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
