import 'should';
import React from 'react';
import { shallow } from 'enzyme';

import FeedItems from '../../src/components/FeedItems';
import Publication from '../../src/components/Publication';

describe('FeedItems', () => {
  it('should render correctly', () => {
    const props = {
      feedItems: {
        foo: {
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
          comments: [],
        },
        bar: {
          _id: 'bar',
          isLoadingThanks: false,
          isLoadingShare: false,
          isAddingComment: false,
          date_created: '2016-08-02',
          poster_type: 'FACEBOOK',
          tags: [],
          likes: [],
          attachment_picture_source: 'http://foobar.com',
          attachment_link: 'http://foobaz.com',
          content: 'FOO BAZ',
          profile: {},
          comments: [],
        }
      },
      handleThanksClick: () => {},
      handleShareClick: () => {},
      handleAddComment: () => {},
    };

    const wrapper = shallow(<FeedItems {...props} />);

    wrapper.find(Publication).should.have.length(2);

  });
});
