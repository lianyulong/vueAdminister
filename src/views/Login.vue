<template>
	<div class="login">
		<div class="login-form">
			<h3 class="login-form-title">欢迎登录</h3>
			<el-form ref="login-form" :model="form" :rules="rules" class="demo-form-inline">
				<el-form-item prop="username">
					<el-input v-model="form.username" placeholder="用户名"><el-button type="primary" slot="prepend" icon="el-icon-s-custom"></el-button></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="form.password" placeholder="密码"><el-button slot="prepend" icon="el-icon-lock"></el-button></el-input>
				</el-form-item>
				<el-button type="primary" @click="login()" style="width: 100%;">登录</el-button>
			</el-form>
		</div>
	</div>
</template>

<script>
import { logIn } from '../http/api.js';
export default {
	data() {
		return {
			form: {
				username: 'admin',
				password: '123456'
			},
			rules: {
				username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
				password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
		};
	},
	methods: {
		login() {
			this.$refs['login-form'].validate(valid => {
				if (valid) {
					logIn(this.form).then(res => {
						this.$store.commit('setUser', this.form.username);
						this.$store.commit('setToken', res.data.data);
						this.$message({
							message: res.data.msg,
							type: 'success'
						});
						this.$router.push({
							path: `/index`
						});
					});
				}
			});
		}
	}
};
</script>

<style scoped="scoped">
.login {
	height: 100vh;
	background: url(https://file.iviewui.com/admin-dist/img/login-bg.0899ffa6.jpg) center center no-repeat;
	background-size: cover;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
.login-form {
	width: 300px;
	background: #fff;
	border-radius: 10px;
	margin-right: 160px;
}
.login-form-title {
	height: 50px;
	line-height: 50px;
	text-indent: 15px;
	font-weight: 700;
	font-size: 14px;
	border-bottom: 1px solid #ddd;
}
.demo-form-inline {
	padding: 25px 15px;
}
.login-form .el-button {
	font-size: 12px;
	border-radius: 3px;
	padding: 9px 15px;
}
</style>
