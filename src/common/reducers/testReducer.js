export default function testReducer(
  state = {
    testing: true
  },
  action
) {
  switch (action.type) {
    case 'ADD':
      return state;
    default:
      return state;
  }
}
