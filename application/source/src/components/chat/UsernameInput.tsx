import React from "react";

type Props = {
  username: string,
  handleUsername: (event:any) => void,
  handleSubmit: () => void
}

const UsernameInput = (props: Props) => {
  const {username, handleUsername, handleSubmit} = props;
  return (
    <div className="register">
      <input
        id="user-name"
        placeholder="Enter your name"
        name="userName"
        value={username}
        onChange={handleUsername}
      />
      <button type="button" onClick={handleSubmit}>
        connect
      </button>
    </div>
  );
};
export default UsernameInput;