import React, { PropTypes } from 'react';
import moment from 'moment';

moment.locale('fr');

const Period = ({ date }) => <div className="period">{moment(date).format('DD MMM YYYY')}</div>;

Period.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Period;

