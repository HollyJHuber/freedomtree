const notesReducerDefaultState = {
  data: 'categories',
  kind: 'list',
  listId: 0,
  listNotation: '',
  dropdownId: 0,
  dropdownNotation: '',
  queryId: 0,
  queryNotation: '',
  question: "What's Happening?",
  instruction: "Select the issue that best describes your situation:",
  history: '',
};

export default (state = notesReducerDefaultState, action) => {
  switch (action.type) {
    case 'FILTER_BY_ID':
      console.log('from the filters reducer:', action.notes);
      return state;
    case 'SELECT_LIST_ID':
      return {
        ...state,
        listId: action.listId,
        listNotation: action.listNotation,
        history: action.listNotation,
      };
    case 'SELECT_DROPDOWN_ID':
      return {
        data: '',
        kind: 'query',
        dropdownId: action.dropdownId,
        dropdownNotation: action.dropdownNotation,
        instruction: "Select the statement that best describes your situation:",
        question: action.dropdownNotation,
      };
      case 'SELECT_QUERY_ID':
      return {
        data: 'where',
        kind: 'list',
        queryId: action.selectedId,
        queryNotation: action.notation,
        question: "Where's It Happening?", 
        instruction: "Select the appropriate location:",
        history: history + " > "
      }
    default: 
      return state;
  }
};
//