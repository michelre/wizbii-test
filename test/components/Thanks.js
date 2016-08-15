import 'should';
import React from 'react';
import { shallow } from 'enzyme';
import Thanks from '../../src/components/Thanks';

describe('Thanks', () => {
  it('should render correctly when it is not loading', () => {
    const props = {
      id: 'foo',
      isLoadingThanks: false,
      handleThanksClick: () => {},
    };

    const wrapper = shallow(<Thanks {...props}/>);

    wrapper.find('i').hasClass('fa fa-plus-circle').should.be.true();
    wrapper.find('b').isEmpty().should.be.false();
  });

  it('should render correctly when it is loading', () => {
    const props = {
      id: 'foo',
      isLoadingThanks: true,
      handleThanksClick: () => {},
    };

    const wrapper = shallow(<Thanks {...props}/>);

    wrapper.find('i').hasClass('fa fa-spinner fa-pulse').should.be.true();
    wrapper.find('b').isEmpty().should.be.true();
  });
});
