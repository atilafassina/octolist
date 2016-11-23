import React, { Component } from 'react';

class InputUser extends Component {

  render(props) {
  let input;

    return (
      <div>
        <form className="inputdata-wrap">
          <input className="gh-user" />
          <button className="btn-submit" type="submit" onClick={this.props.getRepo}>
            Send
          </button>
        </form>
      </div>
    )
  }
}

export default InputUser
