const filtersReducerDefaultState = {
  selectedId: 0,
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'FILTER_BY_ID':
      console.log('from the filters reducer:', action.filters);
      return state;
    default: 
      return state;
  }
};
//