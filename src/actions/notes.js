export const testNotes = (
  {
    currentData = 'categories',
    nextData = 'issues',
    selectedId = 0,
    selectedText = ''
  } = {}
) => ({
  type: 'TEST_NOTES',
  notes: {
    currentData,
    nextData,
    selectedId,
    selectedText,
  }
});