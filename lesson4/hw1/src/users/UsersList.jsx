import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';
import { connect } from 'react-redux';
import * as userActions from './users.actions';

class UsersList extends React.Component {
  goPrev = () => {
    this.props.prevPage();
  };

  goNext = () => {
    this.props.nextPage();
  };

  render() {
    const { users } = this.props;
    const usersPerPage = 3;

    const start = users.currentPage * usersPerPage;
    const usersToDiplay = users.usersList.slice(start, start + usersPerPage);

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={users.currentPage}
          totalItems={users.usersList.length}
          itemsPerPage={usersPerPage}
        />
        <ul className="users">
          {usersToDiplay.map(user => (
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
  nextPage: userActions.nextPage,
  prevPage: userActions.prevPage,
};

const connector = connect(mapState, mapDispatch);

const ConnectedUsersList = connector(UsersList);

export default ConnectedUsersList;
