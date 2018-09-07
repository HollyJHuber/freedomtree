// match by selectedId

export default (data, { selectedId }) => {
  if (data.currentType === "list"){
    return data.list.map(item);
  } else if (data.currentType === "dropdown"){
    return data.dropdown.map(item);
  } else {
    return data.query.filter((item) => {
      return item.itemId === selectedId;
    });
  }
};

//data.query
//data.dropdown
//data.list