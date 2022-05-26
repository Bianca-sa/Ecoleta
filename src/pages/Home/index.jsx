import React, { useState } from 'react';
import { Wrapper, Header, Modal } from '../../componets/index';
import buscar from '../../assets/images/buscar.svg';
import './home.scss';

function Home() {
  const [openModal, setOpenModal] = useState();

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
          <button className='btnSearch' onClick={() => setOpenModal(true)}>
            Pesquisar pontos de coleta
          </button>
        </div>
      </div>
      {openModal && <Modal />}
    </Wrapper>
  );
}

export default Home;
