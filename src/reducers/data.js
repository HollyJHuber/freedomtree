const dataReducerDefaultState = {
  database: ["whats", "wheres", "whos"],
  counter: 0,
  kind: 'list',
  listId: 0,
  listNotation: '',
  dropdownId: 0,
  dropdownNotation: '',
  queryId: 0,
  queryNotation: '',
  history: '',
  currentData: 'whats',
  question: '', 
  instruction: '',
  list:[],
  dropdown:[],
  query:[]
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
        instruction: action.instruction
      };
      case 'SELECT_LIST_ID':
      return {
        ...state,
        listId: action.listId,
        listNotation: action.listNotation
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
        instruction: "Select the statement that best describes your situation:"
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
        instruction: action.instruction
      };
    default: 
      return state;
  }
};

