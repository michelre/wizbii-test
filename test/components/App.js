import 'should';
import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';

import * as api from '../../src/helpers/api';

import App from '../../src/components/App';

let authenticateStub = null;
let newsStub = null;

describe('App', () => {
  before(() => {
    authenticateStub = sinon.stub(api, 'authenticate');
    newsStub = sinon.stub(api, 'news');
    authenticateStub.returns(new Promise(resolve => resolve({ 'access-token': 'token', profile: { _id: 'foo' } })));
    newsStub.returns(new Promise(resolve => resolve({ feed_items: {
      feed_items: [{
        type: 'publication',
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
          comments: [],
          status: 'visible',
          type: 'SHARE',
        }
      }]
    }})));
  })
  it('should be mounted correctly', () => {
    const wrapper = mount(<App username={'foo#mail.com'} password={'foobar'}/>);
    wrapper.update()
    console.log(wrapper.state())

  });
  it('should handle the share click correctly', () => {
    const wrapper = mount(<App username={'foo#mail.com'} password={'foobar'}/>);
    //App.prototype.handleThanksClick('foo')
  });
  it('should handle the thanks click correctly', () => {

  });
  it('should add a new comment', () => {

  });
  it('should render correctly', () => {

  });

});
