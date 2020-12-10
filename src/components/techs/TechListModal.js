import React, { useEffect } from "react";
import {connect} from "react-redux"
import PropTypes from 'prop-types'
import TechItem from "./TechItem";

import {getTechs} from "../../actions/techActions"

const TechListModal = ({getTechs, tech: {techs, loading}}) => {

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div class="modal-content">
        <h4>Technician List</h4>
        <ul class="collection">
          {!loading &&
            techs !== null && techs.map((tech) => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  tech: state.tech
})

export default connect(mapStateToProps, {getTechs})(TechListModal);
