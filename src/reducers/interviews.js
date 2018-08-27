const interviewsReducerDefaultState = [];

export default (state = interviewsReducerDefaultState, action) => {
  switch (action.type) {
    case 'NEW_ISSUE':
      return [ ...state, action.interview ];
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
