import 'should';
import 'should-sinon';
import sinon from 'sinon';
import $ from 'jquery';

import { authenticate, news } from '../../src/helpers/api';

describe('Api', () => {
  beforeEach(() => {
    sinon.stub($, 'ajax');
  });
  afterEach(() => {
    $.ajax.restore();
  })
  it('should make an ajax request to the right URL when calling authenticate', () => {
    authenticate('foo', 'bar');
    $.ajax.should.be.calledWith({
      method: 'POST',
      url: '/authenticate',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: { client_id: 'test', grant_type: 'password', password: 'bar', username: 'foo' } })
  });
  it('should make an ajax request to the right URL when calling news', () => {
    news('XXXXX');
    $.ajax.should.be.calledWith({
      method: 'POST',
      url: '/news',
      headers: { Authorization: 'Bearer XXXXX' },
    })
  });
});
