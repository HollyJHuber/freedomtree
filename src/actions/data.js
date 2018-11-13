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
      let instructionA = '';
      let instructionB = '';
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
          instructionA = item.instructionA;
          instructionB = item.instructionB;
        }
      });
      dispatch(setData(list, dropdown, query, question, instructionA, instructionB));
    });
  };
};

// set data from firebase (from startSetData)
export const setData = (list, dropdown, query, question, instructionA, instructionB) => ({
  type: 'SET_DATA',
  list,
  dropdown,
  query,
  question,
  instructionA,
  instructionB
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
    const currentData = getState().data.currentData;
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
    dispatch(selectDropdownId(dropdownId, dropdownNotation, flag, myData));
  };
};

// Dropdown to display Query
export const selectDropdownId = (dropdownId, dropdownNotation, flag, myData) => ({
  type: 'SELECT_DROPDOWN_ID',
  dropdownId,
  dropdownNotation,
  flag, 
  myData,
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
    let instructionA = '';
    let instructionB = '';
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
          instructionA = item.instructionA;
          instructionB = item.instructionB;
        }
      });
      if (currentData === 'whos'){
        list = list.filter(item => item.parentId === getState().data.listId);
      }
      dispatch(selectQueryId(queryId, counter, currentData, list, dropdown, query, question, instructionA, instructionB, flag, myData));
    });
  };
};

// Query to display next
export const selectQueryId = (queryId, counter, currentData, list, dropdown, query, question, instructionA, instructionB, flag, myData) => ({
  type: 'SELECT_QUERY_ID',
  queryId,
  counter,
  currentData,
  list, 
  dropdown, 
  query,
  question,
  instructionA,
  instructionB,
  flag,
  myData
});

// action to display loading
export const showLoading = () => ({
  type: 'SHOW_LOADING'
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
    let instructionA = '';
    let instructionB = '';
    if (flag == 0){
      determination = 'Y';
      question = "Violation Confirmed";
      instructionA = "Based on the following information provided, it appears your rights have been violated.";
    } else if (flag >= 100) {
      determination = "N";
      question = "No Violation Found";
      instructionA = "Based on the following information provided, it does not appear that your rights have been violated.";
    } else {
      determination = "U";
      question = "Violation Unknown";
      instructionA = "We are unable to make a determination based on the following information provided.";
    }
    dispatch(setDetermination(flag, determination, question, instructionA, instructionB, myData));
  };
};

// display Determination
export const setDetermination = (flag, determination, question, instructionA, instructionB, myData) => ({
  type: 'SET_DETERMINATION',
  flag,
  determination,
  question,
  instructionA,
  instructionB,
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
