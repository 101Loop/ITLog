import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js"

const AddLogModal = () => {
  const [msg, setMsg] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if(msg === "" || tech === ""){
        M.toast({html: "Please enter a message and a tech"})
    } else {
        console.log(msg, tech, attention)
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
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
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

const modalStyle = {
  width: "75%",
  height: "75%",
};

export default AddLogModal;
