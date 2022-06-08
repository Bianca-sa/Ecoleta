import request from './request';

export const getData = async (path) => {
  const response = await request.get(path);
  const { status, data } = response;

  return { status, data };
};
