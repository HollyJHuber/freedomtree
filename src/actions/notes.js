// set selectedId for List to display Dropdown
export const selectListId = (selectedId, listNotation) => ({
  type: 'SELECT_LIST_ID',
  selectedId,
  listNotation,
});

// set selectedId for Dropdown to display Query
export const selectDropdownId = (dropdownId, dropdownNotation) => ({
  type: 'SELECT_DROPDOWN_ID',
  dropdownId,
  dropdownNotation
});