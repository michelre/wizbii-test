import 'should';
import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import * as api from '../../src/helpers/api';

import App from '../../src/components/App';
import Profile from '../../src/components/Profile';
import FeedItems from '../../src/components/FeedItems';

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
          shares: [],
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
  after(() => {
    authenticateStub.restore();
    newsStub.restore();
  });
  it('should be mounted correctly', (done) => {
    const wrapper = mount(<App username={'foo#mail.com'} password={'foobar'}/>);
    wrapper.state().should.have.property('isLoading').which.equal(true);
    setTimeout(() => {
      const currentState = wrapper.state();
      currentState.should.have.property('isLoading').which.equal(false);
      currentState.should.have.property('feedItems').which.have.property('foo');
      currentState.should.have.property('profile').which.eql({ _id: 'foo' });
      done();
    }, 50);

  });
  it('should handle the thanks click correctly', (done) => {
    sinon.stub(api, 'addLike').returns(new Promise(resolve => resolve()));
    const wrapper = mount(<App username={'foo#mail.com'} password={'foobar'}/>);
    setTimeout(() => {
      wrapper.state()['feedItems']['foo'].should.have.property('likes').which.have.lengthOf(0);
      wrapper.find('.thanks').simulate('click');
      setTimeout(() => {
        wrapper.state()['feedItems']['foo'].should.have.property('likes').which.have.lengthOf(1);
        done();
      }, 50);
    }, 50);
  });
  it('should handle the share click correctly', (done) => {
    sinon.stub(api, 'share').returns(new Promise(resolve => resolve()));
    const wrapper = mount(<App username={'foo#mail.com'} password={'foobar'}/>);
    setTimeout(() => {
      wrapper.state()['feedItems']['foo'].should.have.property('shares').which.have.lengthOf(0);
      wrapper.find('.share').simulate('click');
      setTimeout(() => {
        wrapper.state()['feedItems']['foo'].should.have.property('shares').which.have.lengthOf(1);
        done();
      }, 50);
    }, 50);
  });
  it('should add a new comment', (done) => {
    sinon.stub(api, 'addComment').returns(new Promise(resolve => resolve()));
    const wrapper = mount(<App username={'foo#mail.com'} password={'foobar'}/>);
    setTimeout(() => {
      wrapper.state()['feedItems']['foo'].should.have.property('comments').which.have.lengthOf(0);
      wrapper.find('.comment').simulate('keyPress', { charCode: 13 });
      setTimeout(() => {
        wrapper.state()['feedItems']['foo'].should.have.property('comments').which.have.lengthOf(1);
        done();
      }, 50);
    }, 50);
  });
  it('should render correctly', (done) => {
    const wrapper = mount(<App username={'foo#mail.com'} password={'foobar'}/>);
    wrapper.find('i').prop('className').should.equal('fa fa-spinner fa-pulse');
    setTimeout(() => {
      wrapper.find(Profile).should.have.lengthOf(1);
      wrapper.find(FeedItems).should.have.lengthOf(1);
      done();
    }, 50);
  });

});
