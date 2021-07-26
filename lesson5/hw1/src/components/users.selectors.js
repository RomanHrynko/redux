import { createSelector } from 'reselect';

export const usersListSelectors = state => state.users.usersList;

export const filterTextSelector = state => state.users.filterText;

export const filterUsersListSelector = createSelector(
  [filterTextSelector, usersListSelectors],
  (filterText, usersList) => {
    return filterText !== ''
      ? usersList.filter(user => user.name.toLowerCase().includes(filterText.toLowerCase()))
      : usersList;
  },
);
