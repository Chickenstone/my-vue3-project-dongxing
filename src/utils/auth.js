// 认证相关工具函数

/**
 * 检查用户是否已登录
 * @returns {boolean} 是否已登录
 */
export const isLoggedIn = () => {
  const token = uni.getStorageSync('token')
  return !!token
}

/**
 * 获取存储的token
 * @returns {string|null} token值
 */
export const getToken = () => {
  return uni.getStorageSync('token') || null
}

/**
 * 获取用户信息
 * @returns {object|null} 用户信息
 */
export const getUserInfo = () => {
  const userInfo = uni.getStorageSync('userInfo')
  return userInfo ? JSON.parse(userInfo) : null
}

/**
 * 清除登录信息
 */
export const clearAuth = () => {
  uni.removeStorageSync('token')
  uni.removeStorageSync('userInfo')
}

/**
 * 登录检查中间件
 * 如果未登录，会提示用户并跳转到登录页
 * @param {string} redirectUrl 登录成功后要跳转的页面
 * @returns {boolean} 是否已登录
 */
export const requireAuth = (redirectUrl = '') => {
  if (!isLoggedIn()) {
    uni.showModal({
      title: '提示',
      content: '请先登录后再使用',
      showCancel: false,
      success: () => {
        const loginUrl = redirectUrl 
          ? `/pages/login/index?redirect=${encodeURIComponent(redirectUrl)}`
          : '/pages/login/index'
        
        uni.navigateTo({
          url: loginUrl,
          fail: () => {
            // 如果navigateTo失败，使用reLaunch
            uni.reLaunch({
              url: '/pages/login/index'
            })
          }
        })
      }
    })
    return false
  }
  return true
}

/**
 * 设置登录信息
 * @param {string} token 登录token
 * @param {object} userInfo 用户信息
 */
export const setAuth = (token, userInfo) => {
  uni.setStorageSync('token', token)
  uni.setStorageSync('userInfo', JSON.stringify(userInfo))
}

/**
 * 检查token是否过期
 * @returns {boolean} 是否过期
 */
export const isTokenExpired = () => {
  const token = getToken()
  if (!token) return true
  
  try {
    // 这里可以添加token解析逻辑，检查过期时间
    // 简单实现：检查token格式
    const parts = token.split('.')
    if (parts.length !== 3) return true
    
    // 可以添加更复杂的JWT解析逻辑
    return false
  } catch (error) {
    console.error('Token验证失败:', error)
    return true
  }
}

/**
 * 自动登出（token过期时调用）
 */
export const autoLogout = () => {
  clearAuth()
  uni.showToast({
    title: '登录已过期，请重新登录',
    icon: 'none'
  })
  
  setTimeout(() => {
    uni.reLaunch({
      url: '/pages/login/index'
    })
  }, 1500)
}