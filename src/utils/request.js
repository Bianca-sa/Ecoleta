import axios from 'axios';

const request = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/',
});

export default request;
