const dataReducerDefaultState = {
  counter: 0,
  currentData: 'whats',
  database: ["whats", "wheres", "whos"],
  determination: '',
  dropdown:[],
  dropdownId: 0,
  dropdownNotation: '',
  flag: 0,
  instruction: '',
  interview: [],
  kind: 'list',
  list:[],
  listContent: '',
  listFlag: 0,
  listId: 0,
  listNotation: '',
  loading: false,
  myData: [],
  query:[],
  queryId: 0,
  queryNotation: '',
  question: '',
};


export default (state = dataReducerDefaultState, action) => {
  switch (action.type) {
    // for new data structure
    case 'GET_DATA':
    return {
      ...state,
      interview: action.interview
    };
    case 'SELECT_LIST_ID':
      return {
        ...state,
        listId: action.listId,
        listNotation: action.listNotation,
        listContent: action.listContent,
        listFlag: action.listFlag
      };
    case 'SELECT_DROPDOWN_ID':
      return {
        ...state,
        kind: 'query',
        dropdownId: action.dropdownId,
        dropdownNotation: action.dropdownNotation,
        question: action.dropdownNotation,
        counter: action.counter,
        myData: action.myData
      };
      case 'SELECT_QUERY_ID':
      return {
        ...state,
        listId: 0,
        dropdownId: 0,
        kind: 'list',
        queryId: action.queryId,
        counter: action.counter,
        currentData: action.currentData,
        myData: action.myData
      };
      case 'SET_DETERMINATION':
      return {
        ...state,
        flag: action.flag,
        determination: action.determination,
        question: action.question,
        instruction: action.instruction,
        myData: action.myData,
        loading: false
      }
      case 'SHOW_LOADING':
      return {
        ...state,
        loading: true
      };
    default: 
      return state;
  }
};

