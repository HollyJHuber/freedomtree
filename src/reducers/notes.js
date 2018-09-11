const notesReducerDefaultState = {
  selectedId: 0,
  data: 'categories',
  kind: "list",
  listId: 0,
  listNotation: '',
  dropdownId: 0,
  dropdownNotation: '',
  queryId: 0,
  queryNotation: '',
};

export default (state = notesReducerDefaultState, action) => {
  switch (action.type) {
    case 'FILTER_BY_ID':
      console.log('from the filters reducer:', action.notes);
      return state;
    case 'SELECT_LIST_ID':
      return {
        ...state,
        selectedId: action.selectedId,
        listId: action.selectedId,
        listNotation: action.listNotation,
      };
    case 'SELECT_DROPDOWN_ID':
      return {
        dropdownId: action.dropdownId,
        dropdownNotation: action.dropdownNotation,
        kind: 'query',
      };
      case 'SELECT_QUERY_ID':
      return {
        selectedId: action.selectedId,
        queryId: action.selectedId,
        queryNotation: action.notation,
        kind: 'query',
      }
    default: 
      return state;
  }
};
//