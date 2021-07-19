import { store } from './store.js';
import { addProduct, removeProduct } from './cart.actions.js';
import setLanguage from './language.actions.js';
import { setUser, removeUser } from './user.actions.js';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addProduct({ id: 77, name: 'ball' }));
store.dispatch(addProduct({ id: 66, name: 'rain' }));
store.dispatch(removeProduct(66));

store.dispatch(setLanguage('ua'));

store.dispatch(setUser({ name: 'Roman' }));
store.dispatch(setUser({ name: 'Rostyk' }));
store.dispatch(removeUser());
