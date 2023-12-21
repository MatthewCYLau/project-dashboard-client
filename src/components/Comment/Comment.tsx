import React from "react";
import { Avatar, Grid } from "@material-ui/core";
import useStyles from "./Comment.style";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

type CommentProps = {
  body: string;
  id: string;
  created: string;
  deleteCommentById: (commentId: string) => Promise<void>;
};

const Comment: React.FunctionComponent<CommentProps> = ({
  body,
  id,
  created,
  deleteCommentById,
}) => {
  const styles = useStyles();

  const returnTimeSince = (date: Date): string => {
    var seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

    var interval = seconds / 31536000;

    if (interval > 1) {
      return `posted ${Math.floor(interval)} years ago`;
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return `posted ${Math.floor(interval)} months ago`;
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return `posted ${Math.floor(interval)} days ago`;
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return `posted ${Math.floor(interval)} hours ago`;
    }
    interval = seconds / 60;
    if (interval > 1) {
      return `posted ${Math.floor(interval)} minutes ago`;
    }
    return "posted just now";
  };

  return (
    <Grid container wrap="nowrap" spacing={2} className={styles.root}>
      <Grid item>
        <Avatar>ML</Avatar>
      </Grid>
      <Grid item xs zeroMinWidth>
        <h4 style={{ margin: 0, textAlign: "left" }}>Username</h4>
        <p style={{ textAlign: "left" }}>{body}</p>
        <p style={{ textAlign: "left", color: "gray" }}>
          {returnTimeSince(new Date(created))}
        </p>
        <Button
          variant="outlined"
          color="warning"
          startIcon={<DeleteIcon />}
          onClick={() => deleteCommentById(id)}
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  );
};

export default Comment;
