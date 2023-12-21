export interface AddCommentBody {
  body: string;
  project_id: string;
}

export interface Comment extends AddCommentBody {
  _id: string;
  created: string;
  created_by: string;
  last_modified: string;
  likes: Like[];
}

interface Like {
  _id: string;
}
