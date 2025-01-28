import * as $ from '../Action';
const initaiState = {
  ADRESLER: [],
};
const ReducerFunction = (state = initaiState, Action) => {
  switch (Action.type) {
    case $.ADRES_KAYIT: {
      return {
        ...state,
        ADRESLER: state.ADRESLER.concat(Action.payload),
      };
    }
    default:
      return state;
  }
};
export {ReducerFunction};
