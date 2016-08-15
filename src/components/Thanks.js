import React, { PropTypes } from 'react';

const Thanks = ({ id, isLoadingThanks, handleThanksClick }) => {
  if (isLoadingThanks) return <i className='fa fa-spinner fa-pulse' aria-hidden="true"></i>;
  return <div className="thanks" onClick={() => handleThanksClick(id)}>
      <i className="fa fa-plus-circle" aria-hidden="true"></i>&nbsp;<b>Thanks</b>
  </div>;
};

Thanks.propTypes = {
  id: PropTypes.string.isRequired,
  isLoadingThanks: PropTypes.bool.isRequired,
  handleThanksClick: PropTypes.func.isRequired,
};

export default Thanks;

