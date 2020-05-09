import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function outState() {
	return {
		username: localStorage.getItem('name') || '',
		token: localStorage.getItem('token') || ''
	}
}
export default new Vuex.Store({
	state: outState(),
	mutations: {
		setUser(state, x) {
			state.username = x
			localStorage.setItem('name', x)
		},
		setToken(state, x) {
			state.token = x
			localStorage.setItem('token', x)
		},
		restState(state) {
			Object.assign(state, outState())
		}
	},
	actions: {},
	modules: {}
})
