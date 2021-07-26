import React from 'react';
import Filter from './Filter.jsx';
import User from './User.jsx';
import { connect } from 'react-redux';
import * as usersActions from './users.actions';
import { filterTextSelector, filterUsersListSelector } from './users.selectors';

const UsersList = ({ users, handleChange }) => {
  const { usersList, filterText } = users;

  return (
    <div>
      <Filter
        filterText={filterText}
        count={usersList.length}
        onChange={event => handleChange(event.target.value)}
      />
      <ul className="users">
        {usersList.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    users: {
      filterText: filterTextSelector(state),
      usersList: filterUsersListSelector(state),
    },
  };
};

const mapDispatch = {
  handleChange: usersActions.filterText,
};

export default connect(mapState, mapDispatch)(UsersList);
