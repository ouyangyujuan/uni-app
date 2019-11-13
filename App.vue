<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	.uni-tabbar__item:nth-child(4) {
		position: relative !important;
		top: -20rpx;
	}
	.uni-tabbar__item:nth-child(4) img {
		position: absolute;
		bottom: 0px;
		left: -20rpx;
		width: 65px !important;
		height: 65px !important;
	}
</style>
