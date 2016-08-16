import 'should';
import sinon from 'sinon';
import 'should-sinon'
import R from 'ramda';
import React from 'react';
import { shallow } from 'enzyme';

import Comments from '../../src/components/Comments';

const props = {
  id: 'foo',
  comments: [{ _id: 'comment_id', content: 'COMMENT', date: '2015-01-01', profile: { name: 'profileName', avatar: 'http://foo.com' } }],
  isAddingComment: false,
  handleAddComment: () => {},
};

let wrapper = null;

describe('Comments', () => {
  beforeEach(() => {
    wrapper = shallow(<Comments {...props}/>);
  });
  it('should be initialized with the right state', () => {
    wrapper.state('inputValue').should.equal('');
  });
  it('should call handleCommentChange when the input changes', () => {
    wrapper.find('.comment').simulate('change', { target: { value: 'foo' } });
    wrapper.state('inputValue').should.equal('foo');
  });
  it('should call handleAddComment from props and reset the input value state when adding the comment', () => {
    const newProps = R.merge(props, { handleAddComment: sinon.stub() })
    wrapper.setState({ inputValue: 'bar' });
    wrapper.setProps(newProps);

    wrapper.find('.comment').simulate('keyPress', { charCode: 13 });

    wrapper.state('inputValue').should.equal('');
    newProps.handleAddComment.should.be.calledWith('foo', 'bar');
  });
  it('should render correctly', () => {
    wrapper.find('.comments li').should.have.lengthOf(1);
    wrapper.find('.comment').props().should.have.property('disabled').which.eql(false);
    wrapper.find('.comment').props().should.have.property('value').which.eql('');
  });
});
