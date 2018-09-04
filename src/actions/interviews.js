//import uuid from 'uuid';

// SELECT ISSUE
// this would be instead of START INTERVIEW?
// issue selected, creates an ID
// stores category & issue info
// writes a history with category
// displays issue on 


// START INTERVIEW
export const startInterview = (
  {
    userId = 0,
    history = '',
    current = 'categories',
    currentType='list',
    next = 'issues',
    selectedId = 0,
  } ={}
) => ({
  type: 'START_INTERVIEW',
  interview: {
    userId,
    history,
    current,
    currentType,
    next,
    selectedId,
  }
});

// SELECT LIST ITEM
export const selectList = (interview) => ({
  type: 'SELECT_LIST',
  interview
});

// MAKE_SELECTION
export const makeSelection = (id, updates) => ({
  type: 'MAKE_SELECTION',
  id,
  updates
});