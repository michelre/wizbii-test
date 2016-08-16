import 'should';
import React from 'react';
import { shallow } from 'enzyme';
import ShareText from '../../src/components/ShareText';

describe('ShareText', () => {
  it('should render correctly', () => {
    const shareObject = { profile: { name: 'Foo Bar' }, original_date: '2016-08-11T17:58:19+0000' };
    let wrapper = shallow(<ShareText shares={[]}/>);
    wrapper.find('p').should.have.lengthOf(0);

    wrapper = shallow(<ShareText shares={[shareObject]}/>);
    wrapper.find('p').text().should.eql('Publié par: Foo Bar (11 août 2016 19h58)');
  });
});
