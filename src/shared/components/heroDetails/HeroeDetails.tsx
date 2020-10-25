import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  clearHeroeDetails,
  fetchHeroeDetails,
} from "../../redux/heroeDetails/heroeDetailsAction";

const HeroeDetails = ({ heroeDetails, fetchHeroe, clearState, location }) => {

  useEffect(() => {
    fetchHeroe(location.pathname.split('/').pop());
    return () => {
      clearState();
    };
  }, []);

  return (
    <div>
      Hero details
      <p>{JSON.stringify(heroeDetails)}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    heroeDetails: state.heroeDetails,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHeroe: (id: string) => dispatch(fetchHeroeDetails(id)),
    clearState: () => dispatch(clearHeroeDetails()),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(HeroeDetails);
