import database from "../firebase/firebase";

// display Query
// export const selectDropdownId = (currentType) => ({
//   type: 'SELECT_DROPDOWN_ID',
//   currentType
// });

// SET_DATA_LIST sets the list value
export const setData = (list, dropdown, query, question, instruction) => ({
  type: 'SET_DATA',
  list,
  dropdown,
  query,
  question,
  instruction
});

// asynchonous action that retrieves the data from Firebase
export const startSetData = () => {
  return (dispatch, getState) => {
    const currentData = getState().data.currentData;
    return database.ref(currentData).once('value').then((snapshot) => {
      const items = [];
      let list = [];
      let dropdown = [];
      let query = [];
      let question ='';
      let instruction = '';
      snapshot.forEach((childSnapshot) => {
        items.push({
          id:childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      //console.log(items, items.count);
      items.map((item) => {
        let type = item.id;
       // console.log(type);
        delete item.id; // removes last item 
        let newItem = Object.keys(item).map(key => item[key]);
        // switch doesn't work here!
        if (type === "list"){
          list = newItem;
        } else if (type === "dropdown"){
          dropdown = newItem;
        } else if (type === "query"){
          query = newItem;
        } else {
          question = item.question;
          instruction = item.instruction;
        }
      });
      dispatch(setData(list, dropdown, query, question, instruction));
    });
  };
};


// updates currentData/nextData then SELECT_QUERY_ID then
// retrieves updated data from firebase
export const startSelectQuery = (queryId, queryNotation) => {
  return (dispatch, getState) => {
    const nextData = getState().data.nextData;
  }
};