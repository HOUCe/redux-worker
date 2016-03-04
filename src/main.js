import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import App from './components/App'

const enhancer = compose(
	// Middleware you want to use in development:
	applyMiddleware(thunk)
);

const store = createStore(rootReducer, {}, enhancer);

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
)