import React, { useEffect } from "react";
import { connect } from "react-redux"
import PropTypes from 'prop-types'

import LogItem from "./LogItem"
import {getLogs} from "../../actions/logActions"
import Preloader from "../layout/Preloader"

const Logs = ({log:{logs, loading}, getLogs}) => {

  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs===null) {
    return <Preloader/>;
  }

  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No Logs to Show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id}/>)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  log: state.log
})

export default connect(mapStateToProps,{getLogs})(Logs);
