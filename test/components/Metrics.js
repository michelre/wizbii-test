import 'should';
import React from 'react';
import { shallow } from 'enzyme';
import Metrics from '../../src/components/Metrics';

describe('Metrics', () => {
  it('should render correctly', () => {
    const comments = [{}, {}];
    const likes = [{}];

    const wrapper = shallow(<Metrics comments={comments} likes={likes} />);

    wrapper.find('b').at(0).text().should.equal('2 commentaires');
    wrapper.find('b').at(1).text().should.equal('1 thanks');
  });
});
