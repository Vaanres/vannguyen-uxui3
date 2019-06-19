export const state = () => ({
  list: []
})

export const mutations = {
  addAll(state, items) {
    state.list.push(...items)
  },
  add(state, item) {
    state.list.push(item)
  }
}

export const getters = {
  get(state) {
    return state.list
  }
}
