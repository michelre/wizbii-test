import React, { PropTypes } from 'react';

const Metrics = ({ comments, likes }) => <div className="metrics">
  <b>{comments.length} commentaires</b> - <b>{likes.length} thanks</b>
</div>;

Metrics.propTypes = {
  comments: PropTypes.array.isRequired,
  likes: PropTypes.array.isRequired,
};

export default Metrics;
