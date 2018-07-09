import React from 'react';
import Modal from 'react-modal';

const MenuModal = (props) => (
  <Modal
    isOpen = {!!props.menuOption}
    onRequestClose = {props.handleCloseMenuModal} 
    contentLabel = "Info from Menu Selection"
  >
    <h1 onClick = { props.handleCloseMenuModal }> close X</h1>
    {props.menuOption && <p>{props.menuOption}</p>}
  </Modal>
);

export default MenuModal;