import 'should';
import React from 'react';
import { shallow } from 'enzyme';
import Period from '../../src/components/Period';

describe('Period', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<Period date={'2014-01-17T14:49:07+0100'} />);

    wrapper.find('.period').text().should.equal('17 janv. 2014');
  });
});
