const notesReducerDefaultState = {
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
};

export default (state = notesReducerDefaultState, action) => {
  switch (action.type) {
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
      };
      case 'SELECT_QUERY_ID':
      return {
        data: 'where',
        kind: 'list',
        queryId: action.queryId,
        queryNotation: action.queryNotation,
        history: action.queryNotation,
      }
    default: 
      return state;
  }
};
//