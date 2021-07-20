import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';
import { connect } from 'react-redux';
import * as userActions from './users.actions.js';

class UsersList extends React.Component {
  goPrev = () => {
    this.props.prevPage();
  };

  goNext = () => {
    this.props.nextPage();
  };

  render() {
    const { users } = this.props;
    const itemsPerPage = 3;

    const startPage = (users.currentPage - 1) * itemsPerPage;
    const countUsersOnPage = users.usersList.slice(startPage, startPage + itemsPerPage);

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={users.currentPage}
          totalItems={users.usersList.length}
          itemsPerPage={itemsPerPage}
        />
        <ul className="users">
          {countUsersOnPage.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => {
  return {
    users: {
      usersList: state.users.usersList,
      currentPage: state.users.currentPage,
    },
  };
};

const mapDispatch = {
  prevPage: userActions.prevPage,
  nextPage: userActions.nextPage,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
