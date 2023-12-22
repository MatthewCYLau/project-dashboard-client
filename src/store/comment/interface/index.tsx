import { User } from "../../auth/interface";

export interface AddCommentBody {
  body: string;
  project_id: string;
}

export interface Comment extends AddCommentBody {
  _id: string;
  created: string;
  created_by: User;
  last_modified: string;
  likes: Like[];
}

interface Like {
  _id: string;
}
