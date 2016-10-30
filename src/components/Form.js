import React from 'react';
import { connect } from 'react-redux';
import { inputUser } from '../actions';

let InputUser = ({ dispatch }) => {
  let input

  return (
    <div>
      <form className="inputdata-wrap" onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(inputUser(input.value, dispatch))
      }}>
        <input className="gh-user" ref={node => input = node } />
        <button className="btn-submit" type="submit">
          Send
        </button>
      </form>
    </div>
  )
}

InputUser = connect()(InputUser)

export default InputUser
