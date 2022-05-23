import './header.scss';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import login from '../../assets/images/login.svg';
import voltar from '../../assets/images/voltar.svg';

const Header = ({ checkButton, checkImg }) => {
  return (
    <div className='header'>
      <img src={logo} alt='Logo da empresa Ecoleta' />
      <div className='nav'>
        {checkImg ? (
          <img
            src={voltar}
            alt='Imagem sinalizando retorno da página anterior'
          />
        ) : (
          <img src={login} alt='Imagem sinalizando entrada' />
        )}

        {checkButton ? (
          <Link className='link' to='/home'>
            Voltar para home
          </Link>
        ) : (
          <Link className='link' to='/'>
            Cadastre um ponto de coleta
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
