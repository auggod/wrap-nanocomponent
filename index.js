var hasWindow = typeof window !== 'undefined'

module.exports = function (Component, cache) {
  return function (name, state, emit) {
    if (cache !== false && hasWindow) return state.cache(Component, name)
    return Component(name, state, emit)
  }
}
