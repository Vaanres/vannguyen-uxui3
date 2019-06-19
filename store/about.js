export const state = () => ({
  about: [],
  works: []
})

export const mutations = {
  addWorks(state, items) {
    state.works.push(...items)
  },
  addWork(state, item) {
    state.works.push(item)
  },
  addAbout(state, item) {
    state.about.push(...item)
  }
}

export const getters = {
  getWorks(state) {
    return state.works
  },
  getAbout(state) {
    return state.about
  }
}
