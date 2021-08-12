import React from 'react';

const UserForm = (props) => {
  return (
    <form onSubmit={props.getUser}>
      <input style={{ margin: "20px auto", display: "flex" }} type="text" name="username" />
      <button>Submit</button>
    </form>
  )
};

export default UserForm;