import React from 'react';
import styles from './users-style'


const Users = (props) => {
  console.log(props.users)
  const users = props.users.map((user, index) =>
    <li className="list__item" key={index}>
      <span className="user__name">{user.username}</span>
    </li>
  );

  return (
    <div className="container">
      <ul className="list">
        {users}
      </ul>
    </div>
  );
};

Users.propTypes = {

};

export default Users;
