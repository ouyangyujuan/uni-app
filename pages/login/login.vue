<template>
	<view class="login">
		<input type="text" :value="username" placeholder="账号"  />
		<input type="text" :value="userpwsd" placeholder="密码"  />
		<button type="default" size="default" class="registered">注册</button>
		<button type="primary" size="default" plain="true" class="btnLogin" @click="login">登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				userpwsd: ''
			}
		},
		methods: {
			login() {
				
				if(this.username == '') {
					uni.showToast({
						content: '请输入用户名'
					});
					return;
				}
				if(this.userpwsd == '') {
					uni.showToast({
						content: '请输入密码'
					});
					return;
				}
			}
		}
	}
</script>

<style>
	
	.login {
		height: 94vh;	/* 重点一 */
		margin: 0 auto;
		background-image: url(../../static/bg.png);
		background-repeat: no-repeat;
		background-size: cover; /* 重点二 */
		overflow: auto;
		box-sizing: border-box;
		padding: 300rpx 100rpx;
	}
	.login input {
		width: 100%;
		height: 100rpx;
		border-bottom: 1px solid rgba(255,255,255,.5);
		text-align: center;
		color: #FFFFFF;
	}
	.login button {
		margin-top: 100rpx;
		
	}
	.registered {
		color: #007AFF;
	}
	.btnLogin {
		/* color: #FFFFFF !important;
		border-color: #FFFFFF !important; */
	}
</style>
