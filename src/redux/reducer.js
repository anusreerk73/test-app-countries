import USER from "../constants";

const initalState = {
    listData:[],
    isLoading: false,
    isError: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
      case USER.LOAD_COUNTRY_LIST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case USER.LOAD_COUNTRY_LIST_SUCCESS:
        return {
          ...state,
          listData: action.listData,
          isLoading: false,
        };
    default:
      return state;
  }
};




export default reducer;