import store from './store.js';
import { increment, decrement, reset } from './counter.actions';
import { addUser, deleteUser, updateUser } from './users.actions.js';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

store.dispatch(addUser({ id: 77, name: 'Roman' }));
store.dispatch(addUser({ id: 66, name: 'Oleg' }));

store.dispatch(deleteUser(66));

store.dispatch(updateUser(77, { name: 'Roman Hrynko', age: 25 }));
