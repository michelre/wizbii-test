import React, { PropTypes } from 'react';
import R from 'ramda';
import { Row, Col, FormControl } from 'react-bootstrap';
import moment from 'moment';


export default class Comments extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
    };
  }
  handleCommentChange(e){
    this.setState({ inputValue: e.target.value });
  }
  handleAddComment(e){
    const { id, handleAddComment } = this.props;
    if (e.charCode === 13){
      handleAddComment(id, this.state.inputValue);
      this.setState({ inputValue: '' });
    }
  }
  render(){
    const { comments, isAddingComment } = this.props;
    return <div className="comments">
      <ul>
      {R.map(({ _id, content, date_created, profile }) => <li key={_id}>
        <Row>
          <Col md={4}>
            <img alt="profile-avatar-comment" className="profile-avatar-comment" src={profile.avatar} />
            <small>{profile.name}</small>
          </Col>
          <Col md={8}>
            <i className="date">{moment(date_created).format('YYYY-MM-DD HH:mm')}</i>
            <p>{content}</p>
          </Col>
        </Row>
      </li>, comments)}
      </ul>
      <form>
        {(isAddingComment) ? <i className="adding-comment fa fa-spinner fa-pulse fa-fw"></i> : null}
        <FormControl
          disabled={isAddingComment}
          name="comment"
          className="comment"
          value={this.state.inputValue}
          componentClass="textarea"
          placeholder="Ajouter un commentaire..."
          onChange={this.handleCommentChange.bind(this)}
          onKeyPress={this.handleAddComment.bind(this)} />
      </form>
    </div>;
  }
}

Comments.propTypes = {
  id: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  isAddingComment: PropTypes.bool.isRequired,
  handleAddComment: PropTypes.func.isRequired,
};

export default Comments;
