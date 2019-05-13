// DEPENDENCIES
import Axios from 'axios';

// ACTION TYPE
const GET_CANDIES = 'GET_CANDIES';

// ACTION CREATOR
const getCandiesActionCreator = candies => ({
  type: GET_CANDIES,
  candies,
});

// ACTION THUNK
export const getCandiesThunk = () => async dispatch => {
  const { data } = await Axios.get('/api/candies');
  dispatch(getCandiesActionCreator(data));
};

const initialState = { candies: [] };

// REDUCER
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CANDIES:
      return { ...state, candies: action.candies };
    default:
      return state;
  }
};

export default rootReducer;
