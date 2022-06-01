import Imagem from '../../assets/images/lampadas.svg';
import Baterias from '../../assets/images/baterias.svg';
import Papéis from '../../assets/images/papeis.svg';
import Eletrônicos from '../../assets/images/eletronicos.svg';
import Orgânicos from '../../assets/images/organicos.svg';
import Óleo from '../../assets/images/oleo.svg';
import React, { useContext, useState, useEffect } from 'react';
import Context from '../../context';
import { useNavigate } from 'react-router-dom';
import {
  Wrapper,
  Header,
  Form,
  CollectionItems,
  Button,
  Modal,
} from '../../componets';
import styles from './styles.module.scss';

const Register = () => {
  const {
    contentContainer,
    formContainer,
    cardContainer,
    text,
    cards,
  } = styles;
  const {
    selectedLampadas,
    setSelectedLampadas,
    selectedPilhas,
    setSelectedPilhas,
    selectedPapeis,
    setSelectedPapeis,
    selectedResiduos,
    setSelectedResiduos,
    selectedOrganicos,
    setSelectedOrganicos,
    selectedOleo,
    setSelectedOleo,
    modalConcluded,
    dbArray,
    setDbArray,
    name,
    address,
    city,
    state,
    number,
    image,
  } = useContext(Context);
  const [openModal, setOpenModal] = useState();
  const [selectedCardLabel, setSelectedCardLabel] = useState([]);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setOpenModal(true);
    return setTimeout(() => {
      navigate('/');
      setOpenModal(false);
    }, 2000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const db = JSON.parse(sessionStorage.getItem('dbStorage') || '[]');

    db.push({ name, address, city, state, number, image, selectedCardLabel });

    sessionStorage.setItem('dbStorage', JSON.stringify(db));

    return handleOpenModal();
  };

  const handleClickCard = (label, stateFn, stateVar) => {
    console.log(stateVar);

    stateFn(!stateVar);

    console.log(stateVar);
    console.log(selectedCardLabel);

    const index = selectedCardLabel?.findIndex((i) => i == label);
    const newArray = [...selectedCardLabel];
    newArray.slice(index, 1);
    return stateVar
      ? setSelectedCardLabel(label)
      : setSelectedCardLabel(newArray);
  };

  useEffect(() => {
    if (sessionStorage.getItem('dbStorage') == undefined) {
      sessionStorage.setItem('dbStorage', []);
    }
  }, []);

  return (
    <Wrapper>
      <Header checkLink checkImg />
      <form className={contentContainer} onSubmit={handleSubmit}>
        <div className={formContainer}>
          <h4>Dados da entidade</h4>
          <Form />
        </div>
        <div className={cardContainer}>
          <div className={text}>
            <h4>Itens de coleta</h4>
            <span>Selecione um ou mais itens abaixo</span>
          </div>
          <div className={cards}>
            <CollectionItems
              img={Imagem}
              label='Lâmpadas'
              onClick={() =>
                handleClickCard(
                  'Lâmpadas',
                  setSelectedLampadas,
                  selectedLampadas
                )
              }
              selected={selectedLampadas}
            />
            <CollectionItems
              img={Baterias}
              label='Pilhas e Baterias'
              onClick={() => {
                setSelectedPilhas(!selectedPilhas);
                handleClickCard('Lâmpadas', selectedPilhas);
              }}
              selected={selectedPilhas}
            />
            <CollectionItems
              img={Papéis}
              label='Papéis e Papelão'
              onClick={() => setSelectedPapeis(!selectedPapeis)}
              selected={selectedPapeis}
            />
            <CollectionItems
              img={Eletrônicos}
              label='Resíduos Eletrônicos'
              onClick={() => setSelectedResiduos(!selectedResiduos)}
              selected={selectedResiduos}
            />
            <CollectionItems
              img={Orgânicos}
              label='Resíduos Orgânicos'
              onClick={() => setSelectedOrganicos(!selectedOrganicos)}
              selected={selectedOrganicos}
            />
            <CollectionItems
              img={Óleo}
              label='Óleo de Cozinha'
              onClick={() => setSelectedOleo(!selectedOleo)}
              selected={selectedOleo}
            />
          </div>
          <Button type='submit' label='Cadastrar ponto de coleta' />
        </div>
      </form>
      {openModal && <Modal isLoadingModal />}
    </Wrapper>
  );
};

export default Register;
