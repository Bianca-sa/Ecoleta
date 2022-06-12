import { createContext, useState } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [selectedLampadas, setSelectedLampadas] = useState(false);
  const [selectedPilhas, setSelectedPilhas] = useState(false);
  const [selectedPapeis, setSelectedPapeis] = useState(false);
  const [selectedResiduos, setSelectedResiduos] = useState(false);
  const [selectedOrganicos, setSelectedOrganicos] = useState(false);
  const [selectedOleo, setSelectedOleo] = useState(false);
  const [modalConcluded, setModalConcluded] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [number, setNumber] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [image, setImage] = useState();
  const [filterCity, setFilterCity] = useState();
  const [filterState, setFilterState] = useState();
  const [stateApiIbge, setStateApiIbge] = useState();
  const [cityApiIbge, setCityApiIbge] = useState();

  return (
    <Context.Provider
      value={{
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
        setModalConcluded,
        name,
        setName,
        address,
        setAddress,
        number,
        setNumber,
        city,
        setCity,
        state,
        setState,
        image,
        setImage,
        filterCity,
        setFilterCity,
        filterState,
        setFilterState,
        stateApiIbge,
        setStateApiIbge,
        cityApiIbge,
        setCityApiIbge,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
