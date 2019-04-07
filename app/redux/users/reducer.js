import { users } from './routines';

const initialState = {
  users: null,
  count: null,
  length: null,
  page: null,
  pages: null,
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    // case users.TRIGGER:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    case users.SUCCESS:
      return {
        ...state,
        users: action.payload.data.content,
        count: action.payload.data.count,
        length: action.payload.data.length,
        page: action.payload.data.page,
        pages: action.payload.data.pages,
      };
    // case users.FAILURE:
    //   return {
    //     ...state,
    //     error: action.payload,
    //   };
    // case users.FULFILL:
    //   return {
    //     ...state,
    //     loading: false,
    //   };
    default:
      return state;
  }
}
