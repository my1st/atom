export const state = () => ({
  userInfos : [
    {name: 'chg', id: 0, age: '28'}
  ]
})

export const mutations = {
  add(state, userInfo){
    state.userInfors.push(userInfo)
  }
}

export const getters = {
  userInfos(state) {
    return state.userInfos
  }
}
