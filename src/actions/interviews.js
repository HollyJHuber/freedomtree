import uuid from 'uuid';

// NEW_ISSUE
export const newIssue = (
  {
    history = '',
    currentCategory = '',
    nextCategory = '',
    issueId = 0,
    issueText = '',
    itemId = 0,
    itemText = '',
    whatId = 0,
    whatText = '',
    where1Id = 0,
    where1Text = ''
  } ={}
) => ({
  type: 'NEW_ISSUE',
  interview: {
    id: uuid(),
    history,
    currentCategory,
    nextCategory,
    issueId,
    issueText,
    itemId,
    itemText,
    whatId,
    whatText,
    where1Id,
    where1Text
  }
});

// MAKE_SELECTION
export const makeSelection = (id, updates) => ({
  type: 'MAKE_SELECTION',
  id,
  updates
});