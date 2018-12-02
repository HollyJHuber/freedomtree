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
export const startSelectDropdown = (dropdownId, dropdownNotation, dropdownContent, dropdownFlag, counter, currentData) => {
  return (dispatch, getState) => {
    // get all the list data (just once here instead of twice in startSelectList)
    const listId = getState().data.listId;
    const listContent = getState().data.listContent;
    let listNotation = getState().data.listNotation;
    const listFlag = getState().data.listFlag;
    !listNotation && (listNotation = listContent);
    !dropdownNotation && (dropdownNotation = dropdownContent);

    let link = counter;
    currentData === "whos" && (link = listId);
  
    const newData = [
      {
        counter: counter,
        data: currentData,
        kind: 'list',
        id: listId,
        notation: listNotation,
        content: listContent,
        flag: listFlag,
        link: counter
      },
      {
        counter: counter + 1,
        data: currentData,
        kind: 'dropdown',
        id: dropdownId, 
        notation: dropdownNotation,
        content: dropdownContent,
        flag: dropdownFlag,
        link: counter
      }
    ];
 
    //new callback to update the myData array requires accurate counter!!
    const myData = updateMyData(getState().data.myData, counter, newData);
    // update counter AFTER updateMyData callback
    counter = increment(counter)(); // for list
    counter = increment(counter)(); // for dropdown
    dispatch(selectDropdownId(dropdownId, dropdownNotation, myData));
  };
};

// Dropdown to display Query
export const selectDropdownId = (dropdownId, dropdownNotation, myData) => ({
  type: 'SELECT_DROPDOWN_ID',
  dropdownId,
  dropdownNotation,
  myData,
});

// select query, set data for next list display, update counter 
export const startSelectQuery = (queryId, queryNotation, queryContent, queryFlag, counter, currentData) => {
  return (dispatch, getState) => {
    !queryNotation && (queryNotation = queryContent);
    const newData = [
    {
      counter: counter,
      data: currentData,
      kind: 'query',
      id: queryId,
      notation: queryNotation,
      content: queryContent,
      flag: queryFlag,
      link: getState().data.dropdownId
    }];
    const myData = updateMyData(getState().data.myData, counter, newData);
    // update counter AFTER updateMyData callback
    counter = increment(counter)(); 
    dispatch(selectQueryId(queryId, myData));
  };
};

// Query to display next
export const selectQueryId = (queryId, myData) => ({
  type: 'SELECT_QUERY_ID',
  queryId,
  myData
});

// action to display loading
export const showLoading = () => ({
  type: 'SHOW_LOADING'
});

// action to set determination data for display 
export const startDetermination = (listId, listNotation, listContent, listFlag, counter) => {
  return (dispatch, getState) => {
    !listNotation && (listNotation = listContent);
    const newData = [
      {
        counter: counter,
        data: 'whos',
        kind: 'list',
        id: listId,
        notation: listNotation,
        content: listContent,
        flag: listFlag,
        link: counter
      }
    ];
    counter = increment(counter)(); // for list
    console.log('before updateMyData counter is:', counter);
    //new callback to update the myData array requires accurate counter!!
    const myData = updateMyData(getState().data.myData, counter, newData);
    console.log(myData);
    const flag = flagged(myData);

    let determination = '';
    let question = '';
    let instruction = '';
    if (flag == 0){
      determination = 'Y';
      question = "Violation Confirmed";
      instruction = "Based on the following information provided, it appears your rights have been violated.";
    } else if (flag >= 100) {
      determination = "N";
      question = "No Violation Found";
      instruction = "Based on the following information provided, it does not appear that your rights have been violated.";
    } else {
      determination = "U";
      question = "Violation Unknown";
      instruction = "We are unable to make a determination based on the following information provided.";
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

// update myData based on counter <-- counter must be accurate for this to work!!
// takes the current myData array, the updated counter, and the newData array
const updateMyData = (array, index, value) => [...array.slice(0, index), ...value];

// calculate flag value
const flagged = (myData) => {
  return myData
    .map((item) => item.flag)
    .reduce((sum, value) => sum + Number(value), 0);
};




