import React, { PropTypes } from 'react';
import R from 'ramda';
import moment from 'moment';
import { Row, Col } from 'react-bootstrap';

import Publication from './Publication';

const FeedItems = (props) => {
  const { feedItems, ...other } = props;
  const sortedPubs = R.sort((p1, p2) => moment(p2.date_created).format('X') - moment(p1.date_created).format('X'),
    R.values(feedItems));

  return <div>
    <Row>
      {R.map(publication => <Col key={publication._id} md={4}>
        <Publication publication={publication} {...other} />
      </Col>, sortedPubs)}
    </Row>
  </div>;
};

FeedItems.propTypes = {
  feedItems: PropTypes.object.isRequired,
};

export default FeedItems;
