const interviewsReducerDefaultState = [
  {
    userId: 0,
    history: '',
    current: 'categories',
    currentType: 'list',
    next: 'issues',
    selectedId: 0,
  }
];

export default (state = interviewsReducerDefaultState, action) => {
  switch (action.type) {
    case 'START_INTERVIEW':
    console.log(action.interview);
      return [ ...state, action.interview ];
    case 'SELECT_LIST':
      console.log(action.interview);
      return { ...interview, ...action.text, ...action.id};
    case 'MAKE_SELECTION':
      return state.map((interview) => {
        if(interview.id === action.id) {
          return { ...interview, ...action.updates};
        } else {
          console.log('no match');
          return interview;
        };
      });
    default:
      return state;
  }
};
