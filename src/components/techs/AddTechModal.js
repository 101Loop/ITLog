import React, { useState } from "react";
import { connect } from "react-redux"
import PropTypes from 'prop-types'

import M from "materialize-css/dist/js/materialize.min.js";

import {addTech} from "../../actions/techActions"

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter the first and the last name" });
    } else {
      addTech({
        firstName,
        lastName
      });

      M.toast({ html: `${firstName} ${lastName} is now a tech` });

      // Clear fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal">
      <div class="modal-content">
        <h4>New technician</h4>
        <div class="row">
          <div class="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlfor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div class="row">
          <div class="input-field">
            <input
              type="text"
              name="LastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlfor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect blue waves-green btn"
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired
}

export default connect(null, {addTech})(AddTechModal);
