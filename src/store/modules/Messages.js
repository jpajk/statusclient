
const state = {
  messages: []
}

const getters = {
  messages (state) {
    return state.messages
  }
}

const mutations = {
  ADD_TO_MESSAGES (state, { type, contents }) {
    state.messages.push({
      type: type,
      contents: contents
    })
  }
}

export default {
  state,
  getters,
  mutations
}
