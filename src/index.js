import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import Todo from './components/Todo';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
    todoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
    console.log(store.getState())
})

const jsx = (
    <Provider store={store}>
        <Todo />
    </Provider>
)

render(jsx, document.getElementById('root'));
registerServiceWorker();
