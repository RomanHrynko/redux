import store from './store.js';
import { addUser, deleteUser } from './users.actions.js';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser({ id: 77, name: 'Roman' }));
store.dispatch(addUser({ id: 33, name: 'Nastya' }));
store.dispatch(addUser({ id: 66, name: 'Alex' }));
store.dispatch(addUser({ id: 99, name: 'Andriy' }));
store.dispatch(addUser({ id: 11, name: 'Olya' }));

store.dispatch(deleteUser(77));
