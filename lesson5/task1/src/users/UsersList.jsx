import React from 'react';
import { connect } from 'react-redux';
import * as userActions from './users.actions';
import Pagination from './Pagination.jsx';
import User from './User.jsx';
import { usersListSelectors, currentPageSelectors } from './users.selectors';

const UsersList = ({ users, prevPage, nextPage }) => {
  const { currentPage, usersList } = users;
  const usersPerPage = 3;

  const start = currentPage * usersPerPage;
  const usersToDisplay = usersList.slice(start, start + usersPerPage);

  return (
    <div>
      <Pagination
        goPrev={prevPage}
        goNext={nextPage}
        currentPage={currentPage}
        totalItems={usersList.length}
        itemsPerPage={usersPerPage}
      />
      <ul className="users">
        {usersToDisplay.map(user => (
          <User key={user.id} {...user} />
        ))}
      </ul>
    </div>
  );
};

const mapState = state => {
  return {
    users: {
      usersList: usersListSelectors(state),
      currentPage: currentPageSelectors(state),
    },
  };
};

const mapDispatch = {
  nextPage: userActions.nextPage,
  prevPage: userActions.prevPage,
};

const connector = connect(mapState, mapDispatch);

const connectedUsersList = connector(UsersList);

export default connectedUsersList;
