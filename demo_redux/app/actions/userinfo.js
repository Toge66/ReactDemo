import * as actionTyps from '../constants/userinfo'

export function login(data) {
  return {
    type : actionTyps.USERINFO_LOGIN,
    data
  }
}

export function updateCityName(data) {
  return {
    type : actionTyps.UPDATE_CITYNAME,
    data
  }
}