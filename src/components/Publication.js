import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import R from 'ramda';

import Tags from './Tags';
import HeaderProfile from './HeaderProfile';
import HeaderCompany from './HeaderCompany';
import Period from './Period';
import ShareText from './ShareText';
import Content from './Content';
import Actions from './Actions';
import Metrics from './Metrics';
import Comments from './Comments';

const Publication = ({ publication, handleShareClick, handleThanksClick, handleAddComment }) => {
  const { _id: publicationId } = publication;
  return <div className="publication">
    <Row>
      <Col md={2}>
        <Period date={publication.date_created}/>
      </Col>
      <Col md={9}>
        {(publication.poster_type === 'PROFILE') ? <HeaderProfile profile={publication.profile}/> : <HeaderCompany company={publication.company}/>}
      </Col>
    </Row>
    <ShareText shares={publication.shares} />
    <Tags tags={publication.tags}/>
    <Content publication={publication} />
    <hr/>
    <Actions
      publication={publication}
      handleShareClick={handleShareClick}
      handleThanksClick={handleThanksClick} />
    <Metrics comments={publication.comments} likes={publication.likes}/>
    <Comments
      id={publicationId}
      comments={publication.comments}
      isAddingComment={publication.isAddingComment}
      inputValue={R.pathOr('', [publicationId, 'comment'], publication)}
      handleAddComment={handleAddComment} />
  </div>;
};

Publication.propTypes = {
  publication: PropTypes.object.isRequired,
  handleThanksClick: PropTypes.func.isRequired,
  handleShareClick: PropTypes.func.isRequired,
  handleAddComment: PropTypes.func.isRequired,
};

export default Publication;
