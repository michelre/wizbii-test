import React from 'react';
import bluebird from 'bluebird';
import R from 'ramda';
import shortid from 'shortid';
import moment from 'moment';
import 'font-awesome/css/font-awesome.min.css';

//import { authenticate, news, addLike, addComment, share } from './api';
import { buildFeedItems, copyPublication } from '../helpers/utils';
import { authenticate, news, addLike, addComment, share } from '../helpers/mock-api';
import FeedItems from './FeedItems';
import Profile from './Profile';

export default
class App extends React.Component{
  constructor(props) {
    super(props);
  }

  handleShareClick(id) {
    let p = R.pathOr([], ['feedItems', id], this.state);
    p = R.merge(p, { isLoadingShare: true });
    this.setState({ feedItems: R.merge(this.state.feedItems, { [id]: p }) });
    share(id).then(() => {
      p = R.merge(p, { isLoadingShare: false });
      const newPub = copyPublication(p, this.state.profile);
      this.setState({ feedItems: R.merge(this.state.feedItems, { [id]: p, [newPub._id]: newPub }) });
    });
  }

  handleThanksClick(id) {
    let p = R.pathOr([], ['feedItems', id], this.state);
    p = R.merge(p, { isLoadingThanks: true });
    this.setState({ feedItems: R.merge(this.state.feedItems, { [id]: p }) });
    addLike(id).then(() => {
      p = R.merge(p, { isLoadingThanks: false, likes: p.likes.concat([{ date: moment().toISOString() }]) });
      this.setState({feedItems: R.merge(this.state.feedItems, { [id]: p }) });
    });
  }

  handleAddComment(id, comment) {
    let p = R.pathOr([], ['feedItems', id], this.state);
    p = R.merge(p, { isAddingComment: true });
    this.setState({ feedItems: R.merge(this.state.feedItems, { [id]: p }) });
    addComment(id).then(() => {
      p = R.merge(p, {
        isAddingComment: false,
        comments: p.comments.concat([{
          id: shortid.generate(),
          comment: comment,
          date: moment().toISOString(),
          profile: {
            name: R.pathOr('', ['profile', 'name'], this.state),
            avatar: R.pathOr('', ['profile', 'avatar'], this.state),
          },
        }])
      });
      this.setState({ feedItems: R.merge(this.state.feedItems, { [id]: p }) });
    });
  }

  componentDidMount() {
    const baseProperties = {
      isLoadingThanks: false,
      isAddingComment: false,
      isLoadingShare: false,
    };
    bluebird.coroutine(function* (props){
      const { 'access-token': token, profile } = yield authenticate(props.username, props.password);
      const { feed_items } = yield news(token);
      this.setState({ feedItems: buildFeedItems(feed_items, baseProperties), profile });
    }).apply(this, [this.props]);
  }

  render() {
    if (!this.state) return null;
    return (<div>
      <Profile profile={this.state.profile}/>
      <FeedItems
        feedItems={this.state.feedItems}
        handleShareClick={this.handleShareClick.bind(this)}
        handleThanksClick={this.handleThanksClick.bind(this)}
        handleAddComment={this.handleAddComment.bind(this)}/>
    </div>);
  }
}
