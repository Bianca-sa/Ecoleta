import { Wrapper, Header, ola } from '../../componets/index';
import buscar from '../../assets/images/buscar.svg';
import './home.scss';

function Home() {
  return (
    <Wrapper hasImage>
      <Header />
      <div className='conteiner'>
        <div className='text-box'>
          <h1>
            Seu marketplace<br></br>de coleta de resíduos.
          </h1>
          <p>
            Ajudamos pessoas a encontrarem pontos <br></br>de coleta de forma
            eficiente.
          </p>
        </div>
        <div className='search'>
          <img src={buscar}></img>
          <button>Pesquisar pontos de coleta</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Home;
