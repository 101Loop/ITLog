import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js"

import {deleteLog} from "../../actions/logActions"

const LogItem = ({ log, deleteLog }) => {
  const onDelete = () => {
    deleteLog(log.id)
    M.toast({html: "Log Deleted"})
  }


  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span class="grey-text">
          <span class="black-text">Id #{log.id}</span> Last Updated By:{" "}
          <span class="black-text">{log.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" onClick={onDelete} class="secondary-content">
            <i class="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired
};

export default connect(null, { deleteLog })(LogItem);
