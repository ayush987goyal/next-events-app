import { useState } from 'react';

import CommentList from './comment-list';
import NewComment, { CommentData } from './new-comment';
import classes from './comments.module.css';

export interface CommentsProps {
  eventId: string;
}

const Comments = (props: CommentsProps) => {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);

  const toggleCommentsHandler = () => {
    setShowComments((prevStatus) => !prevStatus);
  };

  const addCommentHandler = (commentData: CommentData) => {
    // send data to API
  };

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList />}
    </section>
  );
};

export default Comments;
