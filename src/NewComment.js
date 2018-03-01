import React, {Component} from 'react';

class NewComponent extends Component {
  
  constructor(props) {
    super(props);

    this.handleOnEnter = this.handleOnEnter.bind(this);
  }

  handleOnEnter(event) {
    if (event.keyCode===13) {
      this.props.postNewComment({
        comment: this.refs.comment.value
      });
      this.refs.comment.value = '';
      event.preventDefault();
    }
    
  }
  
  render() {
    return (
      <div className="row">
        <textarea ref="comment" placeholder="Comment" className="form-control" onKeyDown={this.handleOnEnter} ></textarea>
      </div>
    );
  }
}

export default NewComponent;
