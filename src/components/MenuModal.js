import React from 'react';
import Modal from 'react-modal';

const MenuModal = (props) => (
  <Modal
    isOpen = {!!props.menuOption}
    onRequestClose = {props.handleCloseMenuModal} 
    contentLabel = "Information from Menu Selection"
  >
    <button onClick = { props.handleCloseMenuModal }> close X</button>
    {props.menuOption === "about" && <h1>About text goes here</h1>}
    {props.menuOption === "contact" && <h1>Contact info goes here</h1>}
    {props.menuOption === "donate" && <h1>Donate form goes here</h1>}
    
    <button onClick = { props.handleCloseMenuModal }> close X</button>
  </Modal>
);

export default MenuModal;