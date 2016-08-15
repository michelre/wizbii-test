import R from 'ramda';
import { generate } from 'shortid';
import moment from 'moment';

export const buildFeedItems = ({ feed_items: items }, base = {}) => {
  let publications = R.filter(({ type, publication }) =>
    type === 'publication' &&
    publication.status === 'visible' &&
    (publication.type === 'SHARE' || publication.type === 'FACEBOOK'), items);
  const groupById = R.groupBy(p => p._id, R.pluck('publication', publications));

  return R.zipObj(R.keys(groupById), R.map(e => R.merge(e, base), R.pluck(0, R.values(groupById))));
};

export const copyPublication = (base, profile) => {
  const id = generate();
  return R.merge(base, {_id: id, profile, date_created: moment().toISOString()});
};
