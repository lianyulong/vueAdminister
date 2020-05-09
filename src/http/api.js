import {
	http
} from './index.js'
//登陆
export function logIn(data) {
	return http('/Admin/login', 'POST', data).then((res) => {
		return res
	})
}
//学科列表
export function disciplineIist() {
	return http('/Subject/findAll', 'POST').then((res) => {
		return res.data
	})
}
//用户列表
export function userIist(data) {
	return http('/User/findAll', 'POST', data).then((res) => {
		return res.data
	})
}
//题目列表
export function topicList(data) {
	return http('Question/findAll', 'POST', data).then((res) => {
		return res.data
	})
}
//意见列表
export function ideaList(data) {
	return http('FeedBack/findAll', 'POST', data).then((res) => {
		return res.data
	})
}
//消息列表
export function messageList(data) {
	return http('Notice/findAll', 'POST', data).then((res) => {
		return res.data
	})
}