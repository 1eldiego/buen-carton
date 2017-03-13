import React from 'react';
import { connect } from 'react-redux';
import { addTip } from '../../modules/tips';
import './styles.css';

const Tip = props => (
  <button className="tip" onClick={props.addTip}>Pedir Limosna $1</button>
);

Tip.propTypes = {
  addTip: React.PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addTip: () => dispatch(addTip(1)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Tip);
