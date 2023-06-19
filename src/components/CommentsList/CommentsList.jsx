import { Comment } from "../Comment/Comment";

export const CommentsList = ({ comments, onDelete }) => {
  return comments.map(({ body, user, id }) => (
    <Comment key={id} id={id} body={body} user={user} onDelete={onDelete} />
  ));
};
