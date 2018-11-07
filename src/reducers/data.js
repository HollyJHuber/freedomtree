const dataReducerDefaultState = {
  counter: 0,
  currentData: 'whats',
  database: ["whats", "wheres", "whos"],
  determination: '',
  dropdown:[],
  dropdownId: 0,
  dropdownNotation: '',
  flag: 0,
  history: [],
  instructionA: '',
  instructionB: '',
  kind: 'list',
  list:[],
  listContent: '',
  listFlag: 0,
  listId: 0,
  listNotation: '',
  myData: [],
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
        instructionA: action.instructionA,
        instructionB: action.instructionB,

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
        data: '',
        kind: 'query',
        dropdownId: action.dropdownId,
        dropdownNotation: action.dropdownNotation,
        question: action.dropdownNotation,
        myData: action.myData,
        flag: action.flag,      
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
        list: action.list,
        dropdown: action.dropdown,
        query: action.query,
        question: action.question,
        instructionA: action.instructionA,
        instructionB: action.instructionB,
        flag: action.flag,
        myData: action.myData
      };
      case 'SET_DETERMINATION':
      return {
        ...state,
        flag: action.flag,
        determination: action.determination,
        question: action.question,
        instructionA: action.instructionA,
        instructionB: action.instructionB,
        myData: action.myData
      }
    default: 
      return state;
  }
};

