import request from './request';

export const getData = async (path) => {
  const response = await request.get(path);
  const { status, data } = response;

  return { status, data };
};

export const getStates = async (stateFn) => {
  const { data } = await getData('estados');

  return stateFn(data);
};

export const getCityByState = async (stateFn, uf) => {
  const { data } = await getData(`estados/${uf[1]}/municipios`);

  return stateFn(data);
};
