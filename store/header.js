export const state = () => ({
  isMenuOpen: false,
  list: []
})

export const mutations = {
  add(state, data) {
    state.list = [...data]
  },
  toggleMenu(state, data) {
    state.isMenuOpen = data
  }
}
