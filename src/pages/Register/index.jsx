import Imagem from '../../assets/images/lampadas.svg';
import Baterias from '../../assets/images/baterias.svg';
import Papéis from '../../assets/images/papeis.svg';
import Eletrônicos from '../../assets/images/eletronicos.svg';
import Orgânicos from '../../assets/images/organicos.svg';
import Óleo from '../../assets/images/oleo.svg';
import { useState } from 'react';

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
  const [selectedLampadas, setSelectedLampadas] = useState(false);
  const [selectedPilhas, setSelectedPilhas] = useState(false);
  const [selectedPapeis, setSelectedPapeis] = useState(false);
  const [selectedResiduos, setSelectedResiduos] = useState(false);
  const [selectedOrganicos, setSelectedOrganicos] = useState(false);
  const [selectedOleo, setSelectedOleo] = useState(false);
  const [modalConcluded, setModalConcluded] = useState();

  const {
    contentContainer,
    formContainer,
    cardContainer,
    text,
    cards,
  } = styles;

  return (
    <Wrapper>
      <Header checkLink checkImg />
      <form
        className={contentContainer}
        onSubmit={() => setModalConcluded(true)}
      >
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
              onClick={() => setSelectedLampadas(!selectedLampadas)}
              selected={selectedLampadas}
            />
            <CollectionItems
              img={Baterias}
              label='Pilhas e Baterias'
              onClick={() => setSelectedPilhas(!selectedPilhas)}
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
          <Button
            isLoadingModal
            type='submit'
            label='Cadastrar ponto de coleta'
          />
        </div>
      </form>
      {modalConcluded && <Modal />}
    </Wrapper>
  );
};

export default Register;
