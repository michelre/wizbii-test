import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

const Profile = ({ profile }) => <div className="profile">
  <Row>
    <Col md={1}>
      <img alt="user-connected-avatar" className="avatar" src={profile.avatar}/>
    </Col>
    <Col md={10}>
      <h3>{profile.name}</h3>
      <small>{profile.title}</small>
    </Col>
  </Row>
</div>;

Profile.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default Profile;

