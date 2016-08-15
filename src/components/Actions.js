import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

import Thanks from './Thanks';
import Share from './Share';

const Actions = ({ publication, handleThanksClick, handleShareClick }) => (<div className="actions">
  <Row>
    <Col md={4} mdOffset={2}>
        <Thanks
          id={publication._id}
          isLoadingThanks={publication.isLoadingThanks}
          handleThanksClick={handleThanksClick} />
    </Col>
    <Col md={4}>
        <Share
          id={publication._id}
          isLoadingShare={publication.isLoadingShare}
          handleShareClick={handleShareClick} />
    </Col>
  </Row>
</div>);

Actions.propTypes = {
  publication: PropTypes.object.isRequired,
  handleThanksClick: PropTypes.func.isRequired,
  handleShareClick: PropTypes.func.isRequired,
};

export default Actions;

