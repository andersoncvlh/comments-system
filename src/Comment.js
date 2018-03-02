import React from 'react';

const Comment = (props) => {
  return (
    <div className="card" >
      <div className="card-body">
        <h5 className="card-title">Comment title - Ex: Who's?</h5>
        <p className="card-text">{props.comment.comment}</p>
        <a className="btn btn-primary">Action... like... Reply??</a>
      </div>
    </div>
  );
}

export default Comment;
