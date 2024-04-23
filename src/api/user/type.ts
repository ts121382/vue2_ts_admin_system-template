//登录接口需要携带参数的ts类型
export interface loginForm {
  username: string
  password: string
}

//登录返回的参数类型
export interface loginResponseData {
  code: number
  message: string
  data: string
}

//返回的userInfo类型
export interface userInfoData {
  code: number
  message: string
  data: {
    id: string
    roleNames: string[]
    avatar: string
    name: string
  }
}
