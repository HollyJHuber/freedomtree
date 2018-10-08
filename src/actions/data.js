import database from "../firebase/firebase";

// display Query
export const selectDropdownId = (currentType) => ({
  type: 'SELECT_DROPDOWN_ID',
  currentType
});

// SET_DATA sets the array values
export const setData = (list) => ({
  type: 'SET_DATA',
  list
});


// asynchonous action that retrieves the data from Firebase
export const startSetData = () => {
  return (dispatch, getState) => {
    return database.ref('categories').once('value').then((snapshot) => {
      const list = [];
      snapshot.forEach((childSnapshot) => {
        list.push({
          ...childSnapshot.val()
        });
      });
      dispatch(setData(list));
    });
  };
};