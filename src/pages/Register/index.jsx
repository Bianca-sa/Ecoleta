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
import { getStates, getCityByState } from '../../utils/get-data';

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
    name,
    address,
    city,
    state,
    setState,
    number,
    image,
    stateApiIbge,
    setStateApiIbge,
    filterState,
    setCityApiIbge,
  } = useContext(Context);

  const [openModal, setOpenModal] = useState();
  const [selectedCardLabel, setSelectedCardLabel] = useState([]);
  const [textAlert, setTextAlert] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setOpenModal(true);
    return setTimeout(() => {
      navigate('/');
      setOpenModal(false);
    }, 1000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const db = JSON.parse(sessionStorage.getItem('dbStorage') || '[]');

    if (selectedCardLabel.length == 0) {
      return setTextAlert(true);
    }

    db.push({ name, address, city, state, number, image, selectedCardLabel });

    sessionStorage.setItem('dbStorage', JSON.stringify(db));

    return handleOpenModal();
  };

  const handleClickCard = (label, fn, variable) => {
    fn(!variable);
    return !variable
      ? setSelectedCardLabel([...selectedCardLabel, label])
      : setSelectedCardLabel(selectedCardLabel.filter((str) => str !== label));
  };

  useEffect(() => {
    if (sessionStorage.getItem('dbStorage') == undefined) {
      sessionStorage.setItem('dbStorage', []);
    }
  }, []);

  useEffect(() => {
    getStates(setStateApiIbge);
    if (state) getCityByState(setCityApiIbge, state);
  }, [state]);

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
          {textAlert && <span>Selecione um dos items abaixo</span>}
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
              onClick={() =>
                handleClickCard(
                  'Pilhas e Baterias',
                  setSelectedPilhas,
                  selectedPilhas
                )
              }
              selected={selectedPilhas}
            />
            <CollectionItems
              img={Papéis}
              label='Papéis e Papelão'
              onClick={() =>
                handleClickCard(
                  'Papéis e Papelão',
                  setSelectedPapeis,
                  selectedPapeis
                )
              }
              selected={selectedPapeis}
            />
            <CollectionItems
              img={Eletrônicos}
              label='Resíduos Eletrônicos'
              onClick={() =>
                handleClickCard(
                  'Resíduos Eletrônicos',
                  setSelectedResiduos,
                  selectedResiduos
                )
              }
              selected={selectedResiduos}
            />
            <CollectionItems
              img={Orgânicos}
              label='Resíduos Orgânicos'
              onClick={() =>
                handleClickCard(
                  'Resíduos Orgânicos',
                  setSelectedOrganicos,
                  selectedOrganicos
                )
              }
              selected={selectedOrganicos}
            />
            <CollectionItems
              img={Óleo}
              label='Óleo de Cozinha'
              onClick={() =>
                handleClickCard(
                  'Óleo de Cozinha',
                  setSelectedOleo,
                  selectedOleo
                )
              }
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
