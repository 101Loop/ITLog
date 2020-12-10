import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import {addLog} from "../../actions/logActions"
import M from "materialize-css/dist/js/materialize.min.js"

const AddLogModal = ({addLog}) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if(message === "" || tech === ""){
        M.toast({html: "Please enter a message and a tech"})
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date()
      }

      addLog(newLog)
      M.toast({html:`Log added by ${tech}`})

      // Clear fields
      setMessage("");
      setTech("");
      setAttention(false);
    }
  }

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div class="modal-content">
        <h4>Enter System Log</h4>
        <div class="row">
          <div class="input-field">
            <input
              type="text"
              name="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlfor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div class="row">
          <div class="input-field">
            <select
              name="Tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select Technician
              </option>
              <option value="John Doe">John Doe</option>
              <option value="Sam Smith">Sam Smith</option>
              <option value="Sara Wilson">Sara Wilson</option>
              <option value="Stephin Reji">Stephin Reji</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
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
  );
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
}

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default connect(null, {addLog})(AddLogModal);
