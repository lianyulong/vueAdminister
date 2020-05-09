import axios from "axios"
const instance = axios.create({
	baseURL: "http://47.111.119.98:8081"
})
const baseURL = "http://47.111.119.98:8081";
import store from "../store/index.js"
import router from "../router/index.js"
import {
	Message
} from "element-ui"
instance.interceptors.request.use(config => {
	if (store.state.token) {
		config.headers.token = store.state.token
	}
	return config;
}, error => {
	return Promise.reject(error);
});
instance.interceptors.response.use(response => {
	if (response.data.msg==="请登录") {
		router.push("/login")
	}
	return response;
}, error => {
	return Promise.reject(error);
});
export function http(url, method, data, params) {
	return new Promise((resolve, reject) => {
		instance({
				url,
				method,
				data,
				params
			})
			.then(res => {
				if ((res.status >= 200 && res.status < 300) || res.status === 304) {
					if (res.data.code === 200) {
						resolve(res)
					} else {
						reject(res.data)
						Message({
							message: res.data.msg,
							type: 'error'
						});
					}
				} else {
					reject(res.data)
					Message({
						message: res.data.msg,
						type: 'error'
					});
				}
			}).catch(err => {
				reject(err.data)
			})
	})
}
export const uploadURL = baseURL + "upload"
