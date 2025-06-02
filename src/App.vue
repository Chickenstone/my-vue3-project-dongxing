<script>
import { initRouteGuard } from './utils/routeGuard'

export default {
  onLaunch: function() {
    console.log('App Launch');
    // 初始化路由守卫
    initRouteGuard();
  },
  onShow: function() {
    console.log('App Show');
  },
  onHide: function() {
    console.log('App Hide');
  }
};
</script>

<style lang="scss">
/* 导入uni.scss变量 */
@import "./uni.scss";

/* 引入图标样式 */
@import "./static/style/icon.css";

/* 全局样式 */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
}

page {
  font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Segoe UI, Arial, Roboto, 'PingFang SC', 'miui', 'Hiragino Sans GB', 'Microsoft Yahei', sans-serif;
  color: $uni-text-color;
  font-size: $uni-font-size-base;
  line-height: 1.5;
  background-color: $uni-bg-color-grey;
  min-height: 100vh;
}

/* 通用动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity $uni-animation-duration-base $uni-animation-timing-ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 通用布局 */
.container {
  padding: 20rpx;
  min-height: 100vh;
}

.page-container {
  padding: 0;
  min-height: 100vh;
  background-color: #f5f5f5;
}

/* 通用按钮样式 */
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24rpx 48rpx;
  border-radius: 12rpx;
  font-size: 32rpx;
  font-weight: 500;
  transition: all 0.3s ease;
  border: none;
  outline: none;
}

.btn-primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 8rpx 24rpx rgba(102, 126, 234, 0.3);
}

.btn-primary:active {
  transform: translateY(2rpx);
  box-shadow: 0 4rpx 12rpx rgba(102, 126, 234, 0.3);
}

.btn-secondary {
  background: #f8f9fa;
  color: #6c757d;
  border: 2rpx solid #e9ecef;
}

.btn-secondary:active {
  background: #e9ecef;
}

.btn-success {
  background: linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%);
  color: white;
  box-shadow: 0 8rpx 24rpx rgba(86, 171, 47, 0.3);
}

.btn-danger {
  background: linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%);
  color: white;
  box-shadow: 0 8rpx 24rpx rgba(255, 65, 108, 0.3);
}

.btn-disabled {
  background: #e9ecef;
  color: #6c757d;
  cursor: not-allowed;
  opacity: 0.6;
}

/* 通用卡片样式 */
.card {
  background: white;
  border-radius: 16rpx;
  padding: 32rpx;
  margin: 20rpx 0;
  box-shadow: 0 4rpx 20rpx rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.card:active {
  transform: translateY(2rpx);
  box-shadow: 0 2rpx 10rpx rgba(0, 0, 0, 0.1);
}

/* 通用表单样式 */
.form-group {
  margin-bottom: 32rpx;
}

.form-label {
  display: block;
  margin-bottom: 12rpx;
  font-size: 28rpx;
  font-weight: 500;
  color: #333;
}

.form-input {
  width: 100%;
  padding: 24rpx 32rpx;
  border: 2rpx solid #e9ecef;
  border-radius: 12rpx;
  font-size: 32rpx;
  background: #fff;
  transition: all 0.3s ease;
}

.form-input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 6rpx rgba(102, 126, 234, 0.1);
}

.form-input.error {
  border-color: #ff416c;
}

.form-error {
  color: #ff416c;
  font-size: 24rpx;
  margin-top: 8rpx;
}

/* 通用文本样式 */
.text-primary {
  color: #667eea;
}

.text-secondary {
  color: #6c757d;
}

.text-success {
  color: #56ab2f;
}

.text-danger {
  color: #ff416c;
}

.text-warning {
  color: #ffc107;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

/* 通用间距 */
.mt-10 { margin-top: 20rpx; }
.mt-15 { margin-top: 30rpx; }
.mt-20 { margin-top: 40rpx; }
.mt-25 { margin-top: 50rpx; }
.mt-30 { margin-top: 60rpx; }

.mb-10 { margin-bottom: 20rpx; }
.mb-15 { margin-bottom: 30rpx; }
.mb-20 { margin-bottom: 40rpx; }
.mb-25 { margin-bottom: 50rpx; }
.mb-30 { margin-bottom: 60rpx; }

.ml-10 { margin-left: 20rpx; }
.ml-15 { margin-left: 30rpx; }
.ml-20 { margin-left: 40rpx; }

.mr-10 { margin-right: 20rpx; }
.mr-15 { margin-right: 30rpx; }
.mr-20 { margin-right: 40rpx; }

.pt-10 { padding-top: 20rpx; }
.pt-15 { padding-top: 30rpx; }
.pt-20 { padding-top: 40rpx; }

.pb-10 { padding-bottom: 20rpx; }
.pb-15 { padding-bottom: 30rpx; }
.pb-20 { padding-bottom: 40rpx; }

.pl-10 { padding-left: 20rpx; }
.pl-15 { padding-left: 30rpx; }
.pl-20 { padding-left: 40rpx; }

.pr-10 { padding-right: 20rpx; }
.pr-15 { padding-right: 30rpx; }
.pr-20 { padding-right: 40rpx; }

/* 通用flex布局 */
.flex {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.flex-row {
  flex-direction: row;
}

.justify-center {
  justify-content: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-around {
  justify-content: space-around;
}

.align-center {
  align-items: center;
}

.align-start {
  align-items: flex-start;
}

.align-end {
  align-items: flex-end;
}

.flex-1 {
  flex: 1;
}

/* 通用显示控制 */
.hidden {
  display: none;
}

.visible {
  display: block;
}

/* 响应式设计 */
@media screen and (max-width: 750rpx) {
  .container {
    padding: 15rpx;
  }
  
  .card {
    padding: 24rpx;
    margin: 15rpx 0;
  }
}
</style>