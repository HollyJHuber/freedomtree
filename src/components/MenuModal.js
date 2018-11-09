import React from 'react';
import Modal from 'react-modal';

const MenuModal = (props) => (
  <Modal
    isOpen = {!!props.menuOption}
    onRequestClose = {props.handleCloseMenuModal} 
    contentLabel = "Information from Menu Selection"
    closeTimeoutMS={200}
    className={"modal"}
  >
    <div 
      className="modal__button"
      onClick = { props.handleCloseMenuModal 
    }> &nbsp;&nbsp;{props.menuOption}
      <i className="fa fa-times fa-lg" aria-hidden="true">&nbsp;&nbsp;</i>
    </div>

    {props.menuOption === "About" && 
    <div className="modal__frame">
      <div className="modal__scroll">
        <h4>Freedom Tree is a new app for defending civil rights.</h4>
        <p>The app is available for use free at freedomtreeusa.org.</p>
        <p>Freedom Tree is a 501(c)3 nonprofit organization dedicated to:</p>
        <ul className="modal__list">
          <li>assisting the public in identifying civil rights violations; </li>
          <li>educating the public with respect to civil rights; </li>
          <li>helping the public address grievances relating to civil rights violations; </li>
          <li>facilitating referrals to suitable advocacy organizations, agencies, or legal counsel;</li>
          <li>studying and tracking civil rights cases; and </li>
          <li>developing technology to assist and educate the public. </li>
        </ul>

        <p>Freedom Tree provides general information that is intended, but not guaranteed, to be correct and up-to-date. The information is not presented as a source of legal advice. You should not rely, for legal advice, on statements or representations made by Freedom Tree.</p>
        <p>If you need legal advice upon which you intend to rely in the course of your legal affairs, consult a competent, independent attorney.</p>
        <p>Freedom Tree does not assume any responsibility for actions or non-actions taken by people who have used this information, and no one shall be entitled to a claim for detrimental reliance on any information provided or expressed.</p>
        <p>Freedom Tree does not endorse, guarantee or warranty the accuracy, reliability or thoroughness of any referenced information, product or service.</p>
      </div>
    </div>
    }

    {props.menuOption === "Contact" && <h1>Contact info goes here</h1>}
    {props.menuOption === "Donate" && <h1>Donate form goes here</h1>}
    {props.menuOption === "FAQ" && <h1>FAQ goes here</h1>}

  </Modal>
);

export default MenuModal;

