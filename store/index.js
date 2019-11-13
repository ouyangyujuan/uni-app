import vue from 'vue'
import Vuex from 'vuex'

vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		login: false,
		token: '',
		avatarUrl: '',
		userName: ''
	},
	mutations: {
		// 登陆
		login(state, provider) {
			console.log(state)
			console.log(provider)
			state.login = true;
			state.token = provider.token;
			state.userName = provider.userName;
			state.avatarUrl = provider.avatarUrl;
		},
		// 退出
		logout(state) {
			state.login = false;
			state.token = '';
			state.userName = '';
			state.avatarUrl = '';
		}
	}
})

export default store