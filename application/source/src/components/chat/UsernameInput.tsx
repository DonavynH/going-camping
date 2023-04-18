import React from "react";

type Props = {
  username: string,
  handleUsername: () => string,
  registerUser: () => void
}

const UsernameInput = (props: Props) => {
  const {username, handleUsername, registerUser} = props;
  return (
    <div className="register">
      <input
        id="user-name"
        placeholder="Enter your name"
        name="userName"
        value={username}
        onChange={handleUsername}
      />
      <button type="button" onClick={registerUser}>
        connect
      </button>
    </div>
  );
};
export default UsernameInput;