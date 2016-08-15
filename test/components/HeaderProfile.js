import 'should';
import React from 'react';
import { shallow } from 'enzyme';
import HeaderProfile from '../../src/components/HeaderProfile';

describe('HeaderProfile', () => {
  it('should render correctly', () => {
    const profile = {
      avatar: 'http://foobar.com',
      name: 'FOO',
    };

    const wrapper = shallow(<HeaderProfile profile={profile}/>);

    wrapper.find('img').prop('src').should.equal('http://foobar.com');
    wrapper.find('h5').text().should.equal('FOO');
  });
});
