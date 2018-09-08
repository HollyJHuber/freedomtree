const filtersReducerDefaultState = {
  selectedId: 201,
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'FILTER_BY_ID':
      console.log('from the filters reducer:', action.filters);
      return state;
    case 'SELECT_LIST_ID':
      return {
        ...state,
        selectedId: action.selectedId
      };
    case 'SELECT_DROPDOWN_ID':
      return {
        ...state,
        selectedId: action.selectedId
      };
    default: 
      return state;
  }
};
//