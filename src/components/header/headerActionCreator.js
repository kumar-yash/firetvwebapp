export const homeActions = {
  PERSON_DATA: "PERSON_DATA"
};

export const setPersonData = personData => {
  return {
    type: homeActions.PERSON_DATA,
    payload: personData
  };
};

export const watchPersonData = () => dispatch => {
  //   console.log("dsa.fjjbadskfjanbsd");
  dispatch(setPersonData({ name: "Yash" }));
};
