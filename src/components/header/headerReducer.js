import { homeActions } from "./headerActionCreator";

const initialState = {
  personData: { name: " Yash in comp" }
};

const headerReducer = (state = initialState, action) => {
  //   console.log("lasdnfljadsnfjlnsdljfnjadsnfnasdjnfsdf", action);
  switch (action.type) {
    case homeActions.PERSON_DATA:
      //   console.log(homeActions);
      return { ...state, personData: action.payload };
    default:
      return state;
  }
};

export default headerReducer;
