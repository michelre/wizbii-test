import 'should';
import 'should-sinon';
import sinon from 'sinon';
import $ from 'jquery';

import { authenticate, news } from '../../src/helpers/api';

describe('Api', () => {
  before(() => {
    sinon.stub($, 'ajax');
  });
  after(() => {
    $.ajax.restore();
  })
  it('should make an ajax request to the right URL when calling authenticate', () => {
    authenticate('foo', 'bar');
    $.ajax.should.be.calledWith({
      method: 'POST',
      url: 'https://api.wizbii.com/v1/account/validate',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      data: { client_id: 'test', grant_type: 'password', password: 'bar', username: 'foo' } })
  });
  it('should make an ajax request to the right URL when calling news', () => {
    news('XXXXX');
    $.ajax.should.be.calledWith({
      method: 'POST',
      url: 'https://api.wizbii.com/v2/dashboard/?direction=newest',
      headers: { Authorization: 'Bearer XXXXX' },
    })
  });
});
