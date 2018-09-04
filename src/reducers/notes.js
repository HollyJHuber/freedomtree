const notesReducerDefaultState = {
  currentData: 'categories',
  nextData: 'issues',
  selectedId: 0,
  selectedText: ''
};

export default (state = notesReducerDefaultState, action) => {
  switch (action.type) {
    case 'TEST_NOTES':
      console.log('from the reducer:', action.notes);
      return state;
    default: 
      return state;
      console.log('notes reducer is called', state);
  }
};