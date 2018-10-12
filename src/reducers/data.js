const dataReducerDefaultState = {
  data: 'what',
  kind: 'list',
  listId: 0,
  listNotation: '',
  dropdownId: 0,
  dropdownNotation: '',
  queryId: 0,
  queryNotation: '',
  history: '',
  answers: '',
  currentData: 'wheres',
  currentType: "list", 
  nextData: 'wheres',
  nextType: 'dropdown',
  selectedId: 215,
  selectedText: '',
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
        listNotation: action.listNotation,
        history: action.listNotation,
      };
    case 'SELECT_DROPDOWN_ID':
      return {
        ...state,
        data: '',
        kind: 'query',
        dropdownId: action.dropdownId,
        dropdownNotation: action.dropdownNotation,
      };
      case 'SELECT_QUERY_ID':
      return {
        ...state,
        listId: 0,
        data: 'where',
        kind: 'list',
        queryId: action.queryId,
        queryNotation: action.queryNotation,
        history: action.queryNotation,
      };
    default: 
      return state;
  }
};

