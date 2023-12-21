import { Actions } from "../actions";
import { ActionType } from "../action-types";
import { Comment } from "../interface";

interface CommentState {
  loading: boolean;
  comments: Comment[];
}

const initialState = {
  loading: true,
  comments: [],
};

const reducer = (
  state: CommentState = initialState,
  action: Actions
): CommentState => {
  switch (action.type) {
    case ActionType.ADD_COMMENT_ERROR:
      return {
        ...state,
        loading: false,
      };
    case ActionType.ADD_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case ActionType.GET_COMMENTS_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
