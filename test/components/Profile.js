import 'should';
import React from 'react';
import { shallow } from 'enzyme';
import Profile from '../../src/components/Profile';

describe('Profile', () => {
  it('should render correctly', () => {
    const profile = {
      avatar: 'http://foobar.com',
      name: 'foo',
      title: 'bar',
    };

    const wrapper = shallow(<Profile profile={profile} />);

    wrapper.find('img').prop('src').should.equal('http://foobar.com');
    wrapper.find('h3').text().should.equal('foo');
    wrapper.find('small').text().should.equal('bar');
  });
});
