//本地存储
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('TOKEN', token)
}

//取出本地数据
export const GET_TOKEN = () => {
  return localStorage.getItem('TOKEN')
}

//删除本地数据
export const REMOVE_TOKEN = () => {
  localStorage.removeItem('TOKEN')
}
