var hasWindow = typeof window !== 'undefined'

module.exports = function (Component) {
  return function (name, state, emit) {
    if (hasWindow) return state.cache(Component, name)
    return Component(name, state, emit)
  }
}
