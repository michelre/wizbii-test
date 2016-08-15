import 'should';
import React from 'react';
import { shallow } from 'enzyme';

import Actions from '../../src/components/Actions';
import Share from '../../src/components/Share';
import Thanks from '../../src/components/Thanks';

describe('Actions', () => {
  it('should render correctly', () => {
    const props = {
      publication: { _id: 'foo', isLoadingThanks: false, isLoadingShare: false },
      handleThanksClick: () => {},
      handleShareClick: () => {},
    };

    const wrapper = shallow(<Actions {...props}/>);

    wrapper.find(Share).should.have.length(1);
    wrapper.find(Thanks).should.have.length(1);
  });
});
