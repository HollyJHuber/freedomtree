const dataReducerDefaultState = {
  currentData: 'categories',
  currentType: "list", 
  nextData: 'issues',
  nextType: 'dropdown',
  selectedId: 215,
  selectedText: '',
  question: "Where's It Happening?", 
  instruction: "Select the appropriate location:",
  list:
  [
    { id: 400, notation:"School", icon:"fas fa-school", text:"School"},
    { id: 401, notation:"Government", icon:"fas fa-landmark", text:"Government"},
    { id: 402, notation:"Public Property", icon:"fas fa-road", text:"Public Property"},
    { id: 403, notation:"Employment/Workplace", icon:"fas fa-briefcase", text:"Employment/Workplace"},
    { id: 404, notation:"Public Accommodations", icon:"fas fa-bus-alt", text:"Public Accommodations"},
    { id: 405, notation:"Hospital/Medical", icon:"fas fa-hospital-alt", text:"Hospital/Medical"},
    { id: 406, notation:"Church/Club/Association", icon:"fas fa-church", text:"Church/Club/Association"},
    { id: 407, notation:"Home/Private Property", icon:"fas fa-home", text:"Home/Private Property"},
    { id: 411, notation:"Other Place", icon:"fas fa-question", text:"Other"}
  ],
  dropdown:
  [
    { id: 501, notation:"Public", text:"Public", parentId: 400, parent:"place"},
    { id: 502, notation:"Charter", text:"Charter", parentId: 400, parent:"place"},
    { id: 503, notation:"Private", text:"Private", parentId: 400, parent:"place"},
    { id: 504, notation:"Home", text:"Home", parentId: 400, parent:"place"},
    { id: 505, notation:"Other", text:"Other", parentId: 400, parent:"place"},
    { id: 511, notation:"Meeting", text:"Meeting", parentId: 401, parent:"place"},
    { id: 512, notation:"Office", text:"Office", parentId: 401, parent:"place"},
    { id: 513, notation:"Event", text:"Event", parentId: 401, parent:"place"},
    { id: 514, notation:"Polling Place", text:"Polling Place", parentId: 401, parent:"place"},
    { id: 515, notation:"Military", text:"Military", parentId: 401, parent:"place"},
    { id: 516, notation:"Other", text:"Other", parentId: 401, parent:"place"},
    { id: 517, notation:"Unknown", text:"I Don't Know", parentId: 401, parent:"place"},
    { id: 518, notation:"Public Square", text:"Public Square", parentId: 402, parent:"place"},
    { id: 519, notation:"Public Park", text:"Public Park", parentId: 402, parent:"place"},
    { id: 520, notation:"Sidewalk/Walkway", text:"Public Sidewalk/Walkway", parentId: 402, parent:"place"},
    { id: 521, notation:"Street", text:"Public Street/Roadway", parentId: 402, parent:"place"},
    { id: 522, notation:"Resources", text:"Public Resources", parentId: 402, parent:"place"},
    { id: 523, notation:"Other", text:"Other", parentId: 402, parent:"place"},
 
  ],
  query:
  [
    {id: 601, notation:"Preschool", text:"Preschool", parentId: 501, parent:"placeType"},
    {id: 602, notation:"Elementary School", text:"Elementary School", parentId: 501, parent:"placeType"},
    {id: 603, notation:"Middle School", text:"Middle School", parentId: 501, parent:"placeType"},
    {id: 604, notation:"High School", text:"High School", parentId: 501, parent:"placeType"},
    {id: 605, notation:"College/University", text:"College/University", parentId: 501, parent:"placeType"},
    {id: 606, notation:"Other", text:"Other", parentId: 501, parent:"placeType"},
    {id: 607, notation:"Preschool", text:"Preschool", parentId: 502, parent:"placeType"},
    {id: 608, notation:"Elementary School", text:"Elementary School", parentId: 502, parent:"placeType"},
    {id: 609, notation:"Middle School", text:"Middle School", parentId: 502, parent:"placeType"},
    {id: 610, notation:"High School", text:"High School", parentId: 502, parent:"placeType"},
    {id: 612, notation:"Other", text:"Other", parentId: 502, parent:"placeType"},
    {id: 613, notation:"Preschool", text:"Preschool", parentId: 503, parent:"placeType"},
    {id: 614, notation:"Elementary School", text:"Elementary School", parentId: 503, parent:"placeType"},
    {id: 615, notation:"Middle School", text:"Middle School", parentId: 503, parent:"placeType"},
    {id: 616, notation:"High School", text:"High School", parentId: 503, parent:"placeType"},
    {id: 617, notation:"College/University", text:"College/University", parentId: 503, parent:"placeType"},
    {id: 618, notation:"Other", text:"Other", parentId: 503, parent:"placeType"},
    {id: 619, notation:"Preschool", text:"Preschool", parentId: 504, parent:"placeType"},
    {id: 620, notation:"Elementary School", text:"Elementary School", parentId: 504, parent:"placeType"},
    {id: 621, notation:"Middle School", text:"Middle School", parentId: 504, parent:"placeType"},
    {id: 622, notation:"High School", text:"High School", parentId: 504, parent:"placeType"},
    {id: 624, notation:"Other", text:"Other", parentId: 504, parent:"placeType"},
    {id: 625, notation:"Local", text:"Local Council, Commission or Board", parentId: 511, parent:"placeType"},
    {id: 626, notation:"School Board", text:"School Board of Education", parentId: 511, parent:"placeType"},
    {id: 627, notation:"State Legislature", text:"State Legislature", parentId: 511, parent:"placeType"},
    {id: 628, notation:"State Dept/Comm", text:"State Department/Commission", parentId: 511, parent:"placeType"},
    {id: 629, notation:"US Congress", text:"US Congress", parentId: 511, parent:"placeType"},
    {id: 630, notation:"Federal Dept/Agency", text:"Federal Dept/Agency/Commission/Bureau", parentId: 511, parent:"placeType"},
    {id: 631, notation:"Other", text:"Other", parentId: 511, parent:"placeType"},
    {id: 632, notation:"Local", text:"Local Government", parentId: 518, parent:"placeType"},
    {id: 633, notation:"State", text:"State Government", parentId: 518, parent:"placeType"},
    {id: 634, notation:"Federal", text:"Federal Government", parentId: 518, parent:"placeType"},
    {id: 635, notation:"Unknown", text:"I don't know", parentId: 518, parent:"placeType"},
    {id: 636, notation:"Other", text:"Other", parentId: 518, parent:"placeType"},
    {id: 637, notation:"Local", text:"Local Government", parentId: 519, parent:"placeType"},
    {id: 638, notation:"State", text:"State Government", parentId: 519, parent:"placeType"},
    {id: 639, notation:"Federal", text:"Federal Government", parentId: 519, parent:"placeType"},
    {id: 640, notation:"Unknown", text:"I don't know", parentId: 519, parent:"placeType"},
    {id: 641, notation:"Other", text:"Other", parentId: 519, parent:"placeType"},
    {id: 642, notation:"Local", text:"Local Government", parentId: 520, parent:"placeType"},
    {id: 643, notation:"State", text:"State Government", parentId: 520, parent:"placeType"},
    {id: 644, notation:"Federal", text:"Federal Government", parentId: 520, parent:"placeType"},
    {id: 645, notation:"Unknown", text:"I don't know", parentId: 520, parent:"placeType"},
    {id: 646, notation:"Other", text:"Other", parentId: 520, parent:"placeType"},
    {id: 647, notation:"Local", text:"Local Government", parentId: 521, parent:"placeType"},
    {id: 648, notation:"State", text:"State Government", parentId: 521, parent:"placeType"},
    {id: 649, notation:"Federal", text:"Federal Government", parentId: 521, parent:"placeType"},
    {id: 650, notation:"Unknown", text:"I don't know", parentId: 521, parent:"placeType"},
    {id: 651, notation:"Other", text:"Other", parentId: 521, parent:"placeType"},
    {id: 652, notation:"Local", text:"Local Government", parentId: 522, parent:"placeType"},
    {id: 653, notation:"State", text:"State Government", parentId: 522, parent:"placeType"},
    {id: 654, notation:"Federal", text:"Federal Government", parentId: 522, parent:"placeType"},
    {id: 655, notation:"Unknown", text:"I don't know", parentId: 522, parent:"placeType"},
    {id: 656, notation:"Other", text:"Other", parentId: 522, parent:"placeType"}
  ],
};


export default (state = dataReducerDefaultState, action) => {
  switch (action.type) {
    case 'SELECT_DROPDOWN':
      return {
        ...state,
        currentType: "query",
        question: "childNotation",
      }
    default: 
      return state;
  }
};

