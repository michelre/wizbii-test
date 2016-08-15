import 'should';
import { buildFeedItems, copyPublication } from '../../src/helpers/utils';

describe('Utils', () => {
  it('should construct an object with feed items when calling buildFeedItems', () => {
    const feed_items = [
      {  type: 'publication', publication: { _id: 'foo', type: 'SHARE', status: 'visible', content: 'content1' } },
      {  type: 'publication', publication: { _id: 'bar', type: 'FACEBOOK', status: 'visible', content: 'content2' } },
      {  type: 'publication', publication: { _id: 'baz', type: 'OTHER', status: 'visible', content: 'content3' } },
    ];

    buildFeedItems({ feed_items }, { props1: 'props1' }).should.eql({
      foo: { _id: 'foo', type: 'SHARE', status: 'visible', content: 'content1', props1: 'props1' },
      bar: { _id: 'bar', type: 'FACEBOOK', status: 'visible', content: 'content2', props1: 'props1' },
    });
  });
  it('should copy a publication which contains a new profile and a new created date', () => {
    const base = { _id: 'foo', date_created: 'date', profile: { name: 'bar' } };
    const res = copyPublication(base, { name: 'BAZ' });

    res.should.have.property('_id').which.not.equal('foo');
    res.should.have.property('date_created').which.not.equal('date');
    res.should.have.property('profile').which.eql({ name: 'BAZ' });

    // Test immutability
    base.should.have.property('_id').which.equal('foo');
    base.should.have.property('date_created').which.equal('date');
    base.should.have.property('profile').which.eql({ name: 'bar' });
  });
});
