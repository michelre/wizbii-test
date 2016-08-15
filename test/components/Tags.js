import 'should';
import React from 'react';
import { shallow } from 'enzyme';
import Tags from '../../src/components/Tags';

describe('Tags', () => {
  it('should render correctly', () => {
    const tags = [{ name: 'foo' }, { name: 'bar' }];

    const wrapper = shallow(<Tags tags={tags} />);

    wrapper.find('div').text().should.equal('#foo #bar');
  });
});
