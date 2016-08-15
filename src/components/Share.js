import React, { PropTypes } from 'react';

const Share = ({ id, isLoadingShare, handleShareClick }) => {
  if (isLoadingShare) return <i className='fa fa-spinner fa-pulse' aria-hidden="true"></i>;
  return <div onClick={() => handleShareClick(id)}>
    <i className="fa fa-share" aria-hidden="true"></i>&nbsp;<b>Partager</b>
  </div>;
};

Share.propTypes = {
  id: PropTypes.string.isRequired,
  isLoadingShare: PropTypes.bool.isRequired,
  handleShareClick: PropTypes.func.isRequired,
};

export default Share;

