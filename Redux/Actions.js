import types from './Constants';

export const setName = data => {
  return {
    type:types.NAME,
    payload:data
  }
}
