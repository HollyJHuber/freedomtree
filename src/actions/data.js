import database from "../firebase/firebase";

// startup action to retrieve all data from Firebase
export const startGetData = () => {
  return (dispatch, getState) => {
    return database.ref().once('value').then((snapshot) => {
      const newItems =[];
      snapshot.forEach((childSnapshot) => {
        newItems.push({
          // adds index as id in object which may be better than using index for ref
          //id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      //console.log(newItems.count, newItems);
      dispatch(getData(newItems));
    });
  };
};

// get new data structure from firebase 
export const getData = (interview) => ({
  type: 'GET_DATA',
  interview
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
export const startSelectDropdown = (dropdownId, dropdownNotation, dropdownContent, dropdownFlag, currentData) => {
  return (dispatch, getState) => {
    // get all the list data (just once here instead of twice in startSelectList)
    const listId = getState().data.listId;
    const listContent = getState().data.listContent;
    let listNotation = getState().data.listNotation;
    const listFlag = getState().data.listFlag;
    !listNotation && (listNotation = listContent);
    !dropdownNotation && (dropdownNotation = dropdownContent);
    let counter = getState().data.counter;
    // what if the counter was from location instead of data??
    
    // we need to change the way we access currentdata, take from interview data instead??
    let newData = [
      {
        counter: counter,
        data: currentData,
        kind: 'list',
        id: listId,
        notation: listNotation,
        content: listContent,
        flag: listFlag
      },
      {
        counter: counter + 1,
        data: currentData,
        kind: 'dropdown',
        id: dropdownId, 
        notation: dropdownNotation,
        content: dropdownContent,
        flag: dropdownFlag
      }
    ];

    counter = increment(counter)(); // for list
    counter = increment(counter)(); // for dropdown
    //new callback to update the myData array requires accurate counter!!
    const myData = updateMyData(getState().data.myData, counter, newData);
    // change question from interview to dropdownNotation??
    // this is like updateMyData callback, to change one element!!
    dispatch(selectDropdownId(dropdownId, dropdownNotation, counter, myData));
  };
};

// Dropdown to display Query
export const selectDropdownId = (dropdownId, dropdownNotation, counter, myData) => ({
  type: 'SELECT_DROPDOWN_ID',
  dropdownId,
  dropdownNotation,
  counter,
  myData,
});

// select query, set data for next list display, update counter 
export const startSelectQuery = (queryId, queryNotation, queryContent, queryFlag) => {
  return (dispatch, getState) => {
    !queryNotation && (queryNotation = queryContent);
    let counter = getState().data.counter;
    let currentData = getState().data.interview[counter].data;
    const newData = 
    {
      counter: counter,
      data: currentData,
      kind: 'query',
      id: queryId,
      notation: queryNotation,
      content: queryContent,
      flag: queryFlag
    };
    // update counter before update myData callback
    counter = increment(counter)(); 
    const myData = updateMyData(getState().data.myData, counter, newData);
    // update currentData <-- this may no longer be needed
    currentData = getState().data.interview[counter].data;

    dispatch(selectQueryId(queryId, counter, currentData, myData));
  };
};

// Query to display next
export const selectQueryId = (queryId, counter, currentData, myData) => ({
  type: 'SELECT_QUERY_ID',
  queryId,
  counter,
  currentData,
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

//CALLBACK FUNCTIONS

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

// update myData based on counter <-- counter must be accurate for this to work!!
const updateMyData = (array, index, value) => [...array.slice(0, index), ...value];
// takes the current myData array, the updated counter, and the newData array


