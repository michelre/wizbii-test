import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

const HeaderCompany = ({ company }) => <div>
    <Row>
      <Col md={4}>
        <img className="company-logo" src={company.logo}/>
      </Col>
      <Col md={7}>
        <h5 className="company-name">{company.name}</h5>
      </Col>
    </Row>
  </div>;

HeaderCompany.propTypes = {
  company: PropTypes.object.isRequired,
};

export default HeaderCompany;

