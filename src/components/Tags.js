import React, { PropTypes } from 'react';
import R from 'ramda';

const Tags = ({ tags }) => <div className="tags">
  {R.reduce((acc, { name }) => `${acc} #${name}`, '', tags)}
</div>;

Tags.propTypes = {
  tags: PropTypes.array.isRequired,
};

export default Tags;
