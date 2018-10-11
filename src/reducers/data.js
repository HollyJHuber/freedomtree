const dataReducerDefaultState = {
  currentData: 'whats',
  currentType: "list", 
  nextData: 'wheres',
  nextType: 'dropdown',
  selectedId: 215,
  selectedText: '',
  question: "Where's It Happening?", 
  instruction: "Select the appropriate location:",
  list:[],
  dropdown:[],
  query:[],
};


export default (state = dataReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        list: action.list,
        dropdown: action.dropdown,
        query: action.query
      };
    // case 'SELECT_DROPDOWN':
    //   return {
    //     ...state,
    //     currentType: "query",
    //     question: "childNotation",
    //   }
    default: 
      return state;
  }
};

