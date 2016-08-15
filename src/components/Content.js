import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

const Content = ({ publication }) => <div className="content">
  <Row>
    <Col md={12}>
      <p className="content">{publication.content}</p>
    </Col>
    <Col md={12}>
      {(publication.attachment_picture_source) ? <img alt="attachment-picture" src={publication.attachment_picture_source}/> : null}
    </Col>
  </Row>
  <a href={publication.attachment_link} target="_blank">{publication.attachment_link}</a>
</div>

Content.propTypes = {
  publication: PropTypes.object.isRequired,
};

export default Content;

