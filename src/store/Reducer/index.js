const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAVERS':
      return {
        ...state,
        navers: action.payload,
      };
    case 'SET_IS_LOADING': {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case 'SET_SHOW_MODAL':
      return {
        ...state,
        showModal: action.payload,
      };
    case 'SET_CONFIRMATION_DIALOG':
      return {
        ...state,
        confirmation: action.payload,
      };
    case 'SET_DELETE_NAVER_DIALOG':
      return {
        ...state,
        deleteNaver: action.payload,
      };
    case 'SET_ERROR_DIALOG':
      return {
        ...state,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
