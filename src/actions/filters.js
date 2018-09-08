// set selectedId for List to display Dropdown
export const selecttListId = (selectedId) => ({
  type: 'SELECT_LIST_ID',
  selectedId
});

// set selectedId for Dropdown to display Query
export const selectDropdownId = (selectedId) => ({
  type: 'SELECT_DROPDOWN_ID',
  selectedId
});