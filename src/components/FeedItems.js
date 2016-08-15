import React, { PropTypes } from 'react';
import R from 'ramda';
import Slider from 'react-slick';
import moment from 'moment';

import Publication from './Publication';

const FeedItems = (props) => {
  const { feedItems, ...other } = props;
  const sortedPubs = R.sort((p1, p2) => moment(p1.date_created).milliseconds() - moment(p2.date_created).milliseconds(),
    R.values(feedItems));
  const settings = {slidesToShow: 3, slidesToScroll: 1, adaptiveHeight: false, className: 'carousel'};
  return <div>
    <div>
      <div className="feed-title">Votre actu</div>
      <Slider {...settings}>
      {R.map(publication =>
        <div key={publication._id}>
            <Publication publication={publication} {...other} />
        </div>, sortedPubs)}
      </Slider>
    </div>
  </div>;
};

FeedItems.propTypes = {
  feedItems: PropTypes.object.isRequired,
};

export default FeedItems;

