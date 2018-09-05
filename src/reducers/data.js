const dataReducerDefaultState = {
  type: "List", 
  question: "What's Happening?", 
  instruction: "Select the issue that best describes your situation:",
  list:
  [
    { id: 100, notation: "Discrimination", icon: "fas fa-users", text: "Discrimination"},
    { id: 101, notation: "Bullying", icon: "fas fa-child", text: "Bullying"},
    { id: 102, notation: "Sexual Harassment", icon: "fas fa-hand-rock", text: "Sexual Harassment"},
    { id: 103, notation: "LGBTQ", icon: "fas fa-transgender-alt", text: "LGBTQ"},
    { id: 104, notation: "Religion", icon: "fas fa-church", text: "Religion"},
    { id: 105, notation: "Speech", icon: "fas fa-bullhorn", text: "Speech"},
    { id: 106, notation: "Protest/Assembly", icon: "fas fa-newspaper", text: "Protest/Assembly"},
    { id: 107, notation: "Disability", icon: "fab fa-accessible-icon", text: "Disability"},
    { id: 108, notation: "Health & Safety", icon: "fas fa-medkit", text: "Health & Safety"},
    { id: 109, notation: "Police", icon: "fas fa-exclamation-triangle", text: "Police"},
    { id: 110, notation: "Emergency", icon: "fas fa-ambulance", text: "Emergency (Call 911)" },
    { id: 111, notation: "Other Issue", icon: "fas fa-question", text: "Other"}
  ],
  dropdown: 
  [
    { id: 201, notation: "Prayer", text: "Prayer", categoryId: 104},
    { id: 202, notation: "Invocation/Blessing", text: "Invocation/Blessing", categoryId: 104},
    { id: 203, notation: "Bible/Scripture", text: "Bible/Scripture", categoryId: 104},
    { id: 204, notation: "Other Holy Book/Scripture", text: "Other Holy Book/Scripture", categoryId: 104},
    { id: 205, notation: "Creation Science/Intelligent Design", text: "Creation Science/Intelligent Design", categoryId: 104},
    { id: 206, notation: "Holidays/Songs", text: "Holidays/Songs", categoryId: 104},
    { id: 207, notation: "Proselytizing/Witnessing", text: "Proselytizing/Witnessing", categoryId: 104},
    { id: 208, notation: "Attire/Jewelry", text: "Attire/Jewelry", categoryId: 104},
    { id: 209, notation: "Baccalaureate", text: "Baccalaureate", categoryId: 104},
    { id: 210, notation: "Other Religion", text: "Other", categoryId: 104},
    { id: 211, notation: "Censorship", text: "Censorship", categoryId: 105},
    { id: 212, notation: "Press", text: "Press", categoryId: 105},
    { id: 213, notation: "Art/Music", text: "Art/Music", categoryId: 105},
    { id: 214, notation: "Personal Expression/Attire", text: "Personal Expression/Attire", categoryId: 105},
    { id: 215, notation: "Pledge of Allegiance", text: "Pledge of Allegiance", categoryId: 105},
    { id: 216, notation: "National Anthem", text: "National Anthem", categoryId: 105},
    { id: 217, notation: "Other Speech", text: "Other", categoryId: 105}
  ],
  query: [
    {id: 301, notation: "don't want to participate", text: "I do not want to participate.", itemId: 215},
    {id: 302, notation: "forced to recite", text: "I am being forced to recite.", itemId: 215},
    {id: 303, notation: "forced to stand", text: "I am being forced to stand.", itemId: 215},
    {id: 304, notation: "treated unfairly", text: "I am being treated unfairly for not participating.", itemId: 215},
    {id: 305, notation: "don't want to say Under God", text: "I do not want to say 'Under God'.", itemId: 215},
    {id: 306, notation: "other pledge", text: "Other", itemId: 215},
    {id: 307, notation: " don't want to participate ", text: "I do not want to participate in prayer.", itemId: 201},
    {id: 308, notation: "not allowed to pray", text: "I am not being allowed to pray.", itemId: 201},
    {id: 309, notation: "forced to pray", text: "I am being forced to pray.", itemId: 201},
    {id: 310, notation: " forced to listen to prayers", text: "I am being forced to listen silently to prayer.", itemId: 201},
    {id: 311, notation: "required to be present", text: "I am required to be present while others pray.", itemId: 201},
    {id: 312, notation: "other prayer", text: "Other", itemId: 201}
    ],
};

export default (state = dataReducerDefaultState, action) => {
  switch (action.type) {
    case 'TEST_DATA':
      console.log('from the reducer:', action.data);
      return state;
    default: 
      return state;
  }
};