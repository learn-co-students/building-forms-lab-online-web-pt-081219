export default function manageBand(state = {
  bands: [],
}, action) {
  switch(action.type) {
    case "ADD_BAND":
      return [...state.band, action.band]
    default:
      return state
  }
};
