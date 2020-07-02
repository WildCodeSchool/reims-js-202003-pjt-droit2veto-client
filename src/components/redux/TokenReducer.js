
const TokenReducer = (state = { token: null }, action) => {
  switch (action.type) {
    case 'SETTOKEN':
      // nouveau State
      return { token: action.newToken };
    default:
      return state;
  }
};


export default TokenReducer;
