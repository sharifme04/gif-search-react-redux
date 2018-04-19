import { FETCH_GIFS } from '../actions/actionConst';

const initialState =  {
  data: []
};

export default function gifs(state = initialState, action) {
  switch (action.type) {
    case FETCH_GIFS:
      return {
        ...state, data: action.payload
      };
    default:
      return state;
  }
}
