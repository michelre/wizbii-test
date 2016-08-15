import 'should';
import React from 'react';
import { shallow } from 'enzyme';
import HeaderCompany from '../../src/components/HeaderCompany';

describe('HeaderCompany', () => {
  it('should render correctly', () => {
    const company = {
      logo: 'http://foobar.com',
      name: 'FOO',
    };

    const wrapper = shallow(<HeaderCompany company={company}/>);

    wrapper.find('img').prop('src').should.equal('http://foobar.com');
    wrapper.find('h5').text().should.equal('FOO');
  });
});
