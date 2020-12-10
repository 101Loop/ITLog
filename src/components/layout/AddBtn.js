import React from "react";

const AddBtn = () => {
  return (
    <div className="fixed-action-btn">
      <a
        href="#add-log-modal"
        className="btn-floating btn-large blue darken-2 modal-trigger"
      >
        <i class="large material-icons">add</i>
      </a>
      <ul>
        <li>
          <a href="#tech-list-modal" class="btn-floating green modal-trigger">
            <i class="material-icons">person</i>
          </a>
        </li>
        <li>
          <a href="#tech-modal" class="btn-floating red modal-trigger">
            <i class="material-icons">person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddBtn;
