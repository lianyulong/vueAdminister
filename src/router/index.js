import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
};
const routes = [{
		path: '/',
		redirect: "/login"
	}, {
		path: '/login',
		name: 'login',
		component: () => import( /* webpackChunkName: "login" */ '../views/Login.vue')
	},
	{
		path: '/index',
		name: 'index',
		component: () => import( /* webpackChunkName: "index" */ '../views/Index.vue'),
		children: [{
				path: '/',
				redirect: "disciplinelist"
			}, {
				path: 'disciplinelist',
				name: 'disciplinelist',
				component: () => import( /* webpackChunkName: "discipline" */ '../page/discipline/Disciplinelist.vue'),
			},
			{
				path: 'userlist',
				name: 'userlist',
				component: () => import( /* webpackChunkName: "users" */ '../page/user/Userlist.vue'),
			},
			{
				path: 'topiclist',
				name: 'topiclist',
				component: () => import( /* webpackChunkName: "topic" */ '../page/topic/Topiclist.vue'),
			},
			{
				path: 'idealist',
				name: 'idealist',
				component: () => import( /* webpackChunkName: "idea" */ '../page/idea/Idealist.vue'),
			},
			{
				path: 'messagelist',
				name: 'messagelist',
				component: () => import( /* webpackChunkName: "message" */ '../page/message/Messagelist.vue'),
			}
		]
	}
]

const router = new VueRouter({
	routes
})

export default router
