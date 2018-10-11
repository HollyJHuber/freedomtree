// List to display Dropdown
export const selectListId = (listId, listNotation) => ({
  type: 'SELECT_LIST_ID',
  listId,
  listNotation,
});

// Dropdown to display Query
export const selectDropdownId = (dropdownId, dropdownNotation) => ({
  type: 'SELECT_DROPDOWN_ID',
  dropdownId,
  dropdownNotation
});

// Query to display next
export const selectQueryId = (queryId, queryNotation) => ({
  type: 'SELECT_QUERY_ID',
  queryId,
  queryNotation
});
