const dataReducerDefaultState = {
  counter: 0,
  currentData: 'whats',
  database: ["whats", "wheres", "whos"],
  dropdown:[],
  dropdownId: 0,
  dropdownNotation: '',
  flag: 0,
  history: '',
  instruction: '',
  kind: 'list',
  list:[],
  listId: 0,
  listNotation: '',
  query:[],
  queryId: 0,
  queryNotation: '',
  question: '',
};


export default (state = dataReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        list: action.list,
        dropdown: action.dropdown,
        query: action.query,
        question: action.question,
        instruction: action.instruction,
      };
      case 'SELECT_LIST_ID':
      return {
        ...state,
        listId: action.listId,
        listNotation: action.listNotation,
        flag: action.flag
      };
    case 'SELECT_DROPDOWN_ID':
      return {
        ...state,
        data: '',
        kind: 'query',
        dropdownId: action.dropdownId,
        dropdownNotation: action.dropdownNotation,
        history: action.history,
        question: action.dropdownNotation,
        instruction: action.instruction,
        flag: action.flag
      };
      case 'SELECT_QUERY_ID':
      return {
        ...state,
        listId: 0,
        dropdownId: 0,
        kind: 'list',
        queryId: action.queryId,
        queryNotation: action.queryNotation,
        history: action.history,
        counter: action.counter,
        currentData: action.currentData,
        list: action.list,
        dropdown: action.dropdown,
        query: action.query,
        question: action.question,
        instruction: action.instruction,
        flag: action.flag
      };
    default: 
      return state;
  }
};

