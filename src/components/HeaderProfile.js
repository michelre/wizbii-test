import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

const HeaderProfile = ({ profile }) => <div>
    <Row>
      <Col md={4}>
        <img className="profile-avatar" src={profile.avatar}/>
      </Col>
      <Col md={7}>
        <h5 className="profile-name">{profile.name}</h5>
      </Col>
    </Row>
  </div>;

HeaderProfile.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default HeaderProfile;
