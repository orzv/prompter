import React, { useReducer } from 'react'
import SettingsPage from './pages/Settings'
import DisplayPage from './pages/Display'
import Dispatcher from './store/context'
import reducer from './store/reducer'
import initialState from './store/state'

export default function () {
	const [state, dispatch] = useReducer(reducer, initialState)
	return (
		<div className="container">
			<Dispatcher.Provider value={dispatch}>
				{state.page === 'settings' && <SettingsPage state={state} />}
				{state.page === 'display' && <DisplayPage state={state} />}
			</Dispatcher.Provider>
		</div>
	)
}