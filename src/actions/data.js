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
export const selectListId = (listId, listNotation, flag) => ({
  type: 'SELECT_LIST_ID',
  listId,
  listNotation,
  flag
});

export const startSelectList = (listId, listNotation, listContent, listFlag) => {
  return (dispatch, getState) => {
    !listNotation && (listNotation = listContent);
    listFlag && (listFlag = flagged(getState().data.flag, listFlag)());
    dispatch(selectListId(listId, listNotation, listFlag));
  };
};

// action to set data for query display 
export const startSelectDropdown = (dropdownId, dropdownNotation, dropdownContent, dropdownFlag) => {
  return (dispatch, getState) => {
    !dropdownNotation && (dropdownNotation = dropdownContent);
    dropdownFlag && (dropdownFlag = flagged(getState().data.flag, dropdownFlag)());
    const listNotation = getState().data.listNotation;
    const history = updateHistory(getState().data.history, listNotation)();
    let instruction = getState().data.instruction; // seems like there should be a better way
    if (getState().data.currentData === "whats") {
      let instruction = "Select the statement that best describes your situation:";
    }
    dispatch(selectDropdownId(dropdownId, dropdownNotation, history, dropdownFlag, instruction));
  };
};

// Dropdown to display Query
export const selectDropdownId = (dropdownId, dropdownNotation, history, flag, instruction) => ({
  type: 'SELECT_DROPDOWN_ID',
  dropdownId,
  dropdownNotation,
  history,
  instruction,
  flag
});

// action to set data for next list display w/ counter callback and history
export const startSelectQuery = (queryId, queryNotation, queryContent, queryFlag) => {
  return (dispatch, getState) => {
    !queryNotation && (queryNotation = queryContent);
    const counter = increment(getState().data.counter)();
    const currentData = getState().data.database[counter];
    const dropdownNotation = getState().data.dropdownNotation;
    const history = updateHistory(getState().data.history, dropdownNotation, queryNotation)();
    const listId = getState().data.listId;
    queryFlag && (queryFlag = flagged(getState().data.flag, queryFlag)());

    // I need to replace this duplicate code with a setData callback
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
      if (currentData === 'whos'){
        const newList = list.filter(item => item.parentId === listId);
        list = newList;
      }
      dispatch(selectQueryId(queryId, queryNotation, history, counter, currentData, list, dropdown, query, question, instruction, queryFlag));
    });
  };
};

// Query to display next
export const selectQueryId = (queryId, queryNotation, history, counter, currentData, list, dropdown, query, question, instruction, flag) => ({
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
  instruction,
  flag
});


//callback function for getting currentData?? or add it to counter?
// you can only return one value from a function but that value can be an array 
// might be nice to update counter and currentData separately
// counter callback function
const increment = (counter) => {
  return function incrementCounter(){
    counter++;
    return counter;
  };
};

// history callback function
const updateHistory = (history, notation, queryNotation) => {
  return function update(){
    if (!!history.trim()){
      history += ` > 
      
      ${notation}`;
      if (queryNotation){
        history += ` > ${queryNotation}`;
      }
    } else {
      history = `${notation}`;  
    }
  return history;
  };
};

// update flag callback
const flagged = (flag, newFlag) => {
  return function updateFlag(){
    flag = flag + newFlag;
    console.log('flag: ', flag);
    return flag;
  };
};


// get data callback function  <-- unable to implement this yet
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