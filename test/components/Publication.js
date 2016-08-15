import 'should';
import React from 'react';
import { shallow } from 'enzyme';

import Publication from '../../src/components/Publication';
import Period from '../../src/components/Period';
import Tags from '../../src/components/Tags';
import HeaderProfile from '../../src/components/HeaderProfile.js';
import HeaderCompany from '../../src/components/HeaderCompany';
import Content from '../../src/components/Content';
import Actions from '../../src/components/Actions';
import Metrics from '../../src/components/Metrics';
import Comments from '../../src/components/Comments';

describe('Publication', () => {
  it('should render correctly', () => {
    const props = {
      publication: {
        _id: 'foo',
        isLoadingThanks: false,
        isLoadingShare: false,
        isAddingComment: false,
        date_created: '2016-08-01',
        poster_type: 'PROFILE',
        tags: [],
        likes: [],
        attachment_picture_source: 'http://foobar.com',
        attachment_link: 'http://foobaz.com',
        content: 'FOO BAR',
        profile: {},
        comments: []
      },
      handleThanksClick: () => {},
      handleShareClick: () => {},
      handleAddComment: () => {},
    };

    const wrapper = shallow(<Publication {...props}/>);

    wrapper.find(Period).should.have.length(1);
    wrapper.find(HeaderProfile).should.have.length(1);
    wrapper.find(HeaderCompany).should.have.length(0);
    wrapper.find(Tags).should.have.length(1);
    wrapper.find(Content).should.have.length(1);
    wrapper.find(Actions).should.have.length(1);
    wrapper.find(Metrics).should.have.length(1);
    wrapper.find(Comments).should.have.length(1);
  });
});
