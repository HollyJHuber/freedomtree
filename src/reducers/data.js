const dataReducerDefaultState = {
  currentData: 'wheres',
  currentType: "list", 
  nextData: 'wheres',
  nextType: 'dropdown',
  selectedId: 215,
  selectedText: '',
  question: '', 
  instruction: '',
  list:[],
  dropdown:[],
  query:[],
};


export default (state = dataReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        list: action.list,
        dropdown: action.dropdown,
        query: action.query,
        question: action.question,
        instruction: action.instruction
      };
    default: 
      return state;
  }
};

