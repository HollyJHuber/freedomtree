import database from "../firebase/firebase";

// display Query
export const selectDropdownId = (currentType) => ({
  type: 'SELECT_DROPDOWN_ID',
  currentType
});

// SET_DATA_LIST sets the list value
export const setData = (list, dropdown, query) => ({
  type: 'SET_DATA',
  list,
  dropdown,
  query
});


// change database references from hardcoded to variables
// asynchonous action that retrieves the data from Firebase
export const startSetData = () => {
  return (dispatch, getState) => {
    return database.ref('whats').once('value').then((snapshot) => {
      const items = [];
      let list = [];
      let dropdown = [];
      let query = [];
      snapshot.forEach((childSnapshot) => {
        items.push({
          id:childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      items.map((item) => {
        let type = item.id;
        delete item.id;
        if (type === "list"){
          list = Object.keys(item).map(key => item[key]);
        } else if (type === "dropdown"){
          dropdown =  Object.keys(item).map(key => item[key]);
        } else {
          query = Object.keys(item).map(key => item[key]);
        }
      });
      dispatch(setData(list, dropdown, query));
    });
  };
};