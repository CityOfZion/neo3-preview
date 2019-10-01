// export default (state = {}, action) => {
//   switch (action.type) {
//     case "SIMPLE_ACTION":
//       return {
//         result: action.payload
//       };
//     default:
//       return state;
//   }
// };

import { REQUEST_BLOCK, REQUEST_BLOCK_SUCCESS } from '../actions/blockActions'

export default (
  state = {
    isLoading: false,
    // isStaleData: false,
    // items: [],
    // selected: {},
    // currentPage: 0,
  },
  action,
) => {
  switch (action.type) {
    // case INVALIDATE_BLOCKS:
    //   return Object.assign({}, state, {
    //     didInvalidate: true,
    //   })
    case REQUEST_BLOCK:
      return Object.assign({}, state, {
        isLoading: true,
      })
    case REQUEST_BLOCK_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        json: action.json,
        lastUpdated: action.receivedAt,
      })
    default:
      return state
  }
}
