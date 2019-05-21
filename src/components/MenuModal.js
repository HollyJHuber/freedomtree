import React from 'react';
import Modal from 'react-modal';

Modal.defaultStyles.overlay.backgroundColor = "rgba(128,128,128,0.8)";

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
      <p>Freedom Tree is also the developer of <a href="http://www.civilrightswiki.org" target="_blank">Civil Rights Wiki</a>, a new website exclusively for civil rights.</p>
      <h5>Disclaimer</h5>
      <p>Freedom Tree provides general information that is intended, but not guaranteed, to be correct and up-to-date. The information is not presented as a source of legal advice. You should not rely, for legal advice, on statements or representations made by Freedom Tree.</p>
      <p>If you need legal advice upon which you intend to rely in the course of your legal affairs, consult a competent, independent attorney.</p>
      <p>Freedom Tree does not assume any responsibility for actions or non-actions taken by people who have used this information, and no one shall be entitled to a claim for detrimental reliance on any information provided or expressed.</p>
      <p>Freedom Tree does not endorse, guarantee or warranty the accuracy, reliability or thoroughness of any referenced information, product or service.</p>
    </div>
    }

    {props.menuOption === "Contact" && 
      <div className="modal__frame">
        <h4>Freedom Tree</h4>
        <p>Phone: 231-855-6271
        <br/>Email: <a href="mailto:info@freedomtreeusa.org?subject=Email%20From%20FreedomTreeUSA">info@freedomtreeusa.org</a>
        <br/>App: freedomtreeusa.org</p>
        <p>Holly J. Huber, Programmer/Developer</p>
        <p className="modal__center">
          <a href="https://www.facebook.com/FreedomTreeUSA" target="_blank"><i className="fab fa-facebook-square fa-2x"></i></a>&nbsp;&nbsp;
          <a href="https://twitter.com/FreedomTreeUSA" target="_blank"><i className="fab fa-twitter-square fa-2x"></i></a>
        </p>
      </div>
    }

    {props.menuOption === "Donate" && 
      <div className="modal__frame">
        <h4>Thank You!</h4>
        <p>Your generous donation will help sustain our mission: “To help people defend their civil rights without charge.”</p>
        <p>Please select or enter the amount of your donation:</p>
        <ul className="modal__list">
          <li>$5-24: Facebook group invite. </li>
          <li>$25: button, magnet, or sticker.</li>
          <li>$35: mug plus button, magnet, or sticker </li>
          <li>$50: t-shirt and mug, plus button, magnet, or sticker.</li>
          <li>$100 or more: all of the above plus membership in the 
          Friends of Freedom Tree*.</li>
          <li>Other [enter amount]: optional merchandise premiums depending on amount. </li>
        </ul>
        <p>Freedom Tree is a 501(c)3 tax-exempt organization, so your donations are tax deductible to the fullest extent of the law.</p>
      </div>
    }

    {props.menuOption === "FAQ" && <h1>FAQ goes here</h1>}

  </Modal>
);

export default MenuModal;

