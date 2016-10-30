import React from 'react';
import { connect } from 'react-redux';
import { inputUser } from './actions';

let InputUser = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(inputUser(input.value, dispatch))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Send
        </button>
      </form>
    </div>
  )
}

InputUser = connect()(InputUser)

export default InputUser
