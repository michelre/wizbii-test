import React, { PropTypes } from 'react';
import moment from 'moment';

moment.locale('fr');

const Period = ({ date }) => <div className="period">
  <div>{moment(date).format('DD MMM YYYY')}</div>
  <small>{moment(date).format('HH[h]mm')}</small>
</div>;

Period.propTypes = {
  date: PropTypes.string.isRequired,
};

export default Period;
