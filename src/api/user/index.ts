import request from '@/utils/request'
import type { loginForm, loginResponseData, userInfoData } from './type'

enum API {
  LOGIN_URL = 'user/login',
  USERINFO_URL = 'user/info',
}

//登录接口方法
export const login = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)

//获取用户信息
export const userInfo = () => request.get<any, userInfoData>(API.USERINFO_URL)
