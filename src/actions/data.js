import database from "../firebase/firebase";


// asynchonous action that retrieves & parses the data from Firebase
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

// set data from firebase (from startSetData)
export const setData = (list, dropdown, query, question, instruction) => ({
  type: 'SET_DATA',
  list,
  dropdown,
  query,
  question,
  instruction
});


// List to display Dropdown
export const selectListId = (listId, listNotation) => ({
  type: 'SELECT_LIST_ID',
  listId,
  listNotation
});

// action to set data for query display
export const startSelectDropdown = (dropdownId, dropdownNotation) => {
  return (dispatch, getState) => {
    let history = getState().data.history;
    const listNotation = getState().data.listNotation;
    history = updateHistory(history, listNotation)();
    dispatch(selectDropdownId(dropdownId, dropdownNotation, history));
  };
};

// Dropdown to display Query
export const selectDropdownId = (dropdownId, dropdownNotation, history) => ({
  type: 'SELECT_DROPDOWN_ID',
  dropdownId,
  dropdownNotation,
  history
});

// action to set data for next list display w/ counter callback and history
export const startSelectQuery = (queryId, queryNotation) => {
  return (dispatch, getState) => {
    const counter = increment(getState().data.counter)();
    const currentData = getState().data.database[counter];
    const dropdownNotation = getState().data.dropdownNotation;
    const history = updateHistory(getState().data.history, dropdownNotation)();
    // I need to use a setData callback here to load the data from the new database
    let list = [];
    let dropdown = [];
    let query = [];
    let question ='';
    let instruction = '';
    return database.ref(currentData).once('value').then((snapshot) => {
      const items = [];
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
      dispatch(selectQueryId(queryId, queryNotation, history, counter, currentData, list, dropdown, query, question, instruction));
    });
  };
};

// Query to display next
export const selectQueryId = (queryId, queryNotation, history, counter, currentData, list, dropdown, query, question, instruction) => ({
  type: 'SELECT_QUERY_ID',
  queryId,
  queryNotation,
  history,
  counter,
  currentData,
  list, 
  dropdown, 
  query,
  question,
  instruction
});

// get data callback function 
const getData = (currentData) => {
  let list = [];
  let dropdown = [];
  let query = [];
  let question ='';
  let instruction = '';
  return database.ref(currentData).once('value').then((snapshot) => {
    const items = [];
    snapshot.forEach((childSnapshot) => {
      items.push({
        id:childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    items.map((item) => {
      let type = item.id;
      delete item.id; // removes last item from data
      let newItem = Object.keys(item).map(key => item[key]);
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
    console.log(list, dropdown, query, question, instruction);
    return list;
  });
};

// counter callback function
const increment = (counter) => {
  return function incrementCounter(){
    counter++;
    return counter;
  };
};

// history callback function
const updateHistory = (history, notation) => {
  return function update(){
    if (!history.trim()){
      history = `Issues > ${notation}`;  
    } else {
      history += ` > ${notation}`;
    }
  return history;
  };
};