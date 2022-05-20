import './header.css';

import logo from '../../assets/images/logo.svg';
import login from '../../assets/images/login.svg';

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='Logo da empresa Ecoleta' />
      <img src={login} alt='Imagem sinalizando login' />
      <span>Cadastre um ponto de coleta</span>
    </div>
  );
};

export default Header;
