import 'should';
import React from 'react';
import { shallow } from 'enzyme';
import Share from '../../src/components/Share';

describe('Share', () => {
  it('should render correctly when it is not loading', () => {
    const props = {
      id: 'foo',
      isLoadingShare: false,
      handleShareClick: () => {},
    };

    const wrapper = shallow(<Share {...props}/>);

    wrapper.find('i').hasClass('fa fa-share').should.be.true();
    wrapper.find('b').isEmpty().should.be.false();
  });

  it('should render correctly when it is loading', () => {
    const props = {
      id: 'foo',
      isLoadingShare: true,
      handleShareClick: () => {},
    };

    const wrapper = shallow(<Share {...props}/>);

    wrapper.find('i').hasClass('fa fa-spinner fa-pulse').should.be.true();
    wrapper.find('b').isEmpty().should.be.true();
  });
});
