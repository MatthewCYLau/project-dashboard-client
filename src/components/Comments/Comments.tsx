import React, { useEffect } from "react";
import api from "../../utils/api";
import { API_BASE_URL } from "../../constants";
import CreateIcon from "@mui/icons-material/Create";
import { Typography, Avatar, TextField, Button } from "@material-ui/core";
import { useFormik } from "formik";
import Comment from "../Comment";
import { useActions } from "../../hooks/useActions";
import useStyles from "./Comments.style";
import { Comment as IComment } from "../../store/comment/interface";

interface AddCommentFormValues {
  body: string;
}
const defaultComments: IComment[] = [];

type CommentsProps = {
  projectId: string;
};
const Comments: React.FunctionComponent<CommentsProps> = ({ projectId }) => {
  const styles = useStyles();
  const { addComment } = useActions();
  const [comments, setComments]: [IComment[], (comments: IComment[]) => void] =
    React.useState(defaultComments);

  const getCommentsByProjectId = async (projectId: string) => {
    try {
      const { data } = await api.get<IComment[]>(
        `${API_BASE_URL}/api/comments?project_id=${projectId}`
      );
      setComments(data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteCommentById = async (commentId: string) => {
    try {
      await api.delete(`${API_BASE_URL}/api/comments/${commentId}`);
      getCommentsByProjectId(projectId);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    projectId && getCommentsByProjectId(projectId);
    // eslint-disable-next-line
  }, [projectId]);

  const initialValues: AddCommentFormValues = {
    body: "",
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values, actions) => {
      addComment({ ...values, project_id: projectId });
      actions.setSubmitting(false);
      actions.resetForm();
      getCommentsByProjectId(projectId);
    },
  });

  return (
    <div className={styles.paper}>
      <Avatar className={styles.avatar}>
        <CreateIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Comments
      </Typography>
      <form className={styles.form} noValidate onSubmit={formik.handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="body"
          label="Comment body"
          name="body"
          autoFocus
          value={formik.values.body}
          onChange={formik.handleChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={styles.submit}
        >
          Add Comment
        </Button>
      </form>
      {comments.map((comment, i) => (
        <Comment
          body={comment.body}
          created={comment.created}
          created_by_name={comment.created_by.name}
          key={comment._id}
          id={comment._id}
          deleteCommentById={deleteCommentById}
        />
      ))}
    </div>
  );
};

export default Comments;
