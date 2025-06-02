// uni-app 请求封装，统一处理 baseURL、token、错误等

const BASE_URL = 'https://fqggxzdqhiqf.sealosbja.site/';
const TIMEOUT = 10000;

/**
 * 封装uni.request
 * @param {Object} options 请求配置
 * @returns {Promise} 请求Promise
 */
const request = (options) => {
  return new Promise((resolve, reject) => {
    // 获取token
    const token = uni.getStorageSync('token');
    
    // 设置请求头
    const header = {
      'Content-Type': 'application/json',
      ...options.header
    };
    
    // 如果有token，添加到请求头
    if (token) {
      header.Authorization = `Bearer ${token}`;
    }
    
    // 处理URL
    let url = options.url;
    if (!url.startsWith('http')) {
      url = BASE_URL + (url.startsWith('/') ? url.slice(1) : url);
    }
    
    uni.request({
      url,
      method: options.method || 'GET',
      data: options.data,
      header,
      timeout: TIMEOUT,
      success: (res) => {
        const { statusCode, data } = res;
        
        if (statusCode === 200) {
          // 检查业务状态码
          if (data.code === 200) {
            resolve(data);
          } else {
            // 业务错误
            const errorMsg = data.message || '请求失败';
            console.error('业务错误:', errorMsg);
            
            // 特殊处理认证错误
            if (data.code === 401) {
              // token过期或无效
              uni.removeStorageSync('token');
              uni.removeStorageSync('userInfo');
              uni.showToast({
                title: '登录已过期',
                icon: 'none'
              });
              
              setTimeout(() => {
                uni.reLaunch({
                  url: '/pages/login/index'
                });
              }, 1500);
            } else {
              uni.showToast({
                title: errorMsg,
                icon: 'none'
              });
            }
            
            reject(new Error(errorMsg));
          }
        } else {
          // HTTP错误
          const errorMsg = `请求失败 ${statusCode}`;
          console.error('HTTP错误:', errorMsg);
          uni.showToast({
            title: errorMsg,
            icon: 'none'
          });
          reject(new Error(errorMsg));
        }
      },
      fail: (err) => {
        console.error('请求失败:', err);
        let errorMsg = '网络请求失败';
        
        if (err.errMsg) {
          if (err.errMsg.includes('timeout')) {
            errorMsg = '请求超时';
          } else if (err.errMsg.includes('fail')) {
            errorMsg = '网络连接失败';
          }
        }
        
        uni.showToast({
          title: errorMsg,
          icon: 'none'
        });
        
        reject(new Error(errorMsg));
      }
    });
  });
};

// 导出各种请求方法
export const get = (url, data = {}, options = {}) => {
  return request({
    url,
    method: 'GET',
    data,
    ...options
  });
};

export const post = (url, data = {}, options = {}) => {
  return request({
    url,
    method: 'POST',
    data,
    ...options
  });
};

export const put = (url, data = {}, options = {}) => {
  return request({
    url,
    method: 'PUT',
    data,
    ...options
  });
};

export const del = (url, data = {}, options = {}) => {
  return request({
    url,
    method: 'DELETE',
    data,
    ...options
  });
};

// 默认导出
export default request;