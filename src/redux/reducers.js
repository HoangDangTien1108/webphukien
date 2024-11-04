
const initialState = {
  currentPage: "homepage",
  
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HOMEPAGE":
      return {
        currentPage: (state.currentPage = "homepage"),
        ...state,
      };
    case "PRODUCTLIST":
      return {
        currentPage: (state.currentPage = "productlist"),
        ...state,
      };
    case "SALEPAGE":
      return {
        currentPage: (state.currentPage = "salepage"),
        ...state,
      };
    case "FAQPAGE":
      return {
        currentPage: (state.currentPage = "faqpage"),
        ...state,
      };
    case "CONTACTPAGE":
      return {
        currentPage: (state.currentPage = "contactpage"),
        ...state
      };
    default:
      return state;
  }
};

export default rootReducer;
