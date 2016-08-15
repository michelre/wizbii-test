import 'should';
import React from 'react';
import { shallow } from 'enzyme';
import Content from '../../src/components/Content';

describe('Content', () => {
  it('should render correctly', () => {
    const publication = {
      content: 'FOO BAR',
      attachment_picture_source: 'http://foobar.com',
      attachment_link: 'http://foobaz.com',
    };

    const wrapper = shallow(<Content publication={publication} />);

    wrapper.find('p').text().should.equal('FOO BAR');
    wrapper.find('img').prop('src').should.equal('http://foobar.com');
    wrapper.find('a').prop('href').should.equal('http://foobaz.com');
  });
});
