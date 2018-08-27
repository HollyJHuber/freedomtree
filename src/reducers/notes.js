const notesReducerDefaultState = {
  currentCategory: 'landingPage',
  nextCategory: 'issue',
  selectedId: 0,
  question: "What's Happening?",
  display: 'landingPage'
};

export default (state = notesReducerDefaultState, action) => {
  switch (action.type) {
    default: 
      return state;
  }
};