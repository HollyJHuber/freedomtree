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

// select list to display dropdown
export const selectListId = (listId, listNotation, listContent, listFlag) => ({
  type: 'SELECT_LIST_ID',
  listId,
  listNotation,
  listContent,
  listFlag
});

// select dropdown to display query
export const startSelectDropdown = (dropdownId, dropdownNotation, dropdownContent, dropdownFlag) => {
  return (dispatch, getState) => {
    // get all the list data (just once here instead of twice in startSelectList)
    const listId = getState().data.listId;
    const listContent = getState().data.listContent;
    let listNotation = getState().data.listNotation;
    const listFlag = getState().data.listFlag;
    !listNotation && (listNotation = listContent);
    !dropdownNotation && (dropdownNotation = dropdownContent);
    const newData = [
      {
        kind: 'list',
        id: listId,
        notation: listNotation,
        content: listContent,
        flag: listFlag
      },
      {
        kind: 'dropdown',
        id: dropdownId, 
        notation: dropdownNotation,
        content: dropdownContent,
        flag: dropdownFlag
      }
    ];
    const flag = flagged(getState().data.flag, listFlag, dropdownFlag)();
    const myData = setArrayImmutable(getState().data.myData, getState().data.counter, newData);
    let instruction = getState().data.instruction; // seems like there should be a better way
    if (getState().data.currentData === "whats") {
      instruction = "Select the statement that best describes your situation:";
    }
    dispatch(selectDropdownId(dropdownId, dropdownNotation, flag, myData, instruction));
  };
};

// Dropdown to display Query
export const selectDropdownId = (dropdownId, dropdownNotation, flag, myData, instruction) => ({
  type: 'SELECT_DROPDOWN_ID',
  dropdownId,
  dropdownNotation,
  flag, 
  myData,
  instruction
});

// select query, set data for next list display, update counter 
export const startSelectQuery = (queryId, queryNotation, queryContent, queryFlag) => {
  return (dispatch, getState) => {
    !queryNotation && (queryNotation = queryContent);
    const newData = 
    {
      kind: 'query',
      id: queryId,
      notation: queryNotation,
      content: queryContent,
      flag: queryFlag
    };
    const index = getState().data.counter;
    const myData = appendArrayItem(getState().data.myData, index, newData);
    const flag = flagged(getState().data.flag, queryFlag)();
    const counter = increment(index)();
    const currentData = getState().data.database[counter];

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
        list = list.filter(item => item.parentId === getState().data.listId);
      }
      dispatch(selectQueryId(queryId, counter, currentData, list, dropdown, query, question, instruction, flag, myData));
    });
  };
};

// Query to display next
export const selectQueryId = (queryId, counter, currentData, list, dropdown, query, question, instruction, flag, myData) => ({
  type: 'SELECT_QUERY_ID',
  queryId,
  counter,
  currentData,
  list, 
  dropdown, 
  query,
  question,
  instruction,
  flag,
  myData
});

// action to set determination data for display 
export const startDetermination = (listId, listNotation, listContent, listFlag) => {
  return (dispatch, getState) => {
    !listNotation && (listNotation = listContent);
    const newData = [
      {
        kind: 'list',
        id: listId,
        notation: listNotation,
        content: listContent,
        flag: listFlag
      }
    ];
    const myData = setArrayImmutable(getState().data.myData, getState().data.counter, newData);
    const flag = flagged(getState().data.flag, listFlag)();
    let determination = '';
    let question = '';
    let instruction = '';
    if (flag == 0){
      determination = 'Y';
      question = "Violation Confirmed";
      instruction = "Based on the information you’ve provided, it appears your rights have been violated.";
    } else if (flag >= 100) {
      determination = "N";
      question = "No Violation Found";
      instruction = "Based on the information you’ve provided, it does not appear that your rights have been violated.";
    } else {
      determination = "U";
      question = "Violation Unknown";
      instruction = "We are unable to make a determination based on the information you’ve provided.";
    }
    dispatch(setDetermination(flag, determination, question, instruction, myData));
  };
};

// display Determination
export const setDetermination = (flag, determination, question, instruction, myData) => ({
  type: 'SET_DETERMINATION',
  flag,
  determination,
  question,
  instruction,
  myData
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
const updateHistory = (history, newHistory, queryNotation) => {
  return function update(){
    history.push(newHistory);
    // fix queryNotation next
      if (queryNotation){
        history += ` > ${queryNotation}`;
      }
      console.log('history', history);
  return history;
  };
};

// update flag callback
const flagged = (flag, newFlag=0, anotherNewFlag=0) => {
  return function updateFlag(){
    let flagSum = Number(flag) + Number(newFlag) + Number(anotherNewFlag);
    return flagSum;
  };
};

// update myData replace array item callback
const setArrayImmutable = (arr, index, value) => {
  const newArray = [...arr];
  newArray[index] = value;
  //console.log('newImmutableArray: ', newArray);
  return newArray;
}

// append an item to the array then replace it in the myData array
const appendArrayItem = (arr, index, value) => { // pass the entire myData array to use later
  const newArrayItem = arr[index];
  newArrayItem.push(value);
  //console.log('newArrayItem: ', newArrayItem);
  return setArrayImmutable(arr, index, newArrayItem);
};

// get data callback function  <-- NOT IN USE! unable to implement this yet
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