import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

const Money = props => (
  <div className="money">$ {props.amount}</div>
);

Money.propTypes = {
  amount: React.PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  amount: state.wallet.amount,
});

export default connect(
  mapStateToProps,
)(Money);
